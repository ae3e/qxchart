/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "qxchart"
 *
 * @asset(ae/chart/*)
 */
qx.Class.define("ae.chart.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }
      
      //Create chart's model
      var chartModel = new ae.chart.model.Chart();
      var m = chartModel.fromJson({
      	layout:{
      		title:"MyChart"
      	},
      	data:[{
      		x: [1, 2, 3, 4],
      		y: [10, 15, 13, 17],
      		type: 'scatter',
      		textfont:{
      			family:"Arial",
      			size:32
      		}
      	},{
      		x: [1, 2, 3, 4],
      		y: [16, 5, 11, 9],
      		type: 'scatter',
      		mypropo:'er'
      	}]
      });
      
      //Layout
      var chartLayout = new ae.chart.model.layout.Layout().set({
    	  title:"My chart",
    	  plot_bgcolor:"#EEE",
    	  paper_bgcolor:"#FFF"
      });
      chartModel.setLayout(chartLayout);

      //First trace
      var scatter1 = new ae.chart.model.trace.Bar();
      scatter1.setX([1, 2, 3, 4]);
      scatter1.setY([10, 15, 13, 17]);
      scatter1.setOrientation("h");
      //scatter1.setMode("markers");
      
      //Second trace
      var scatter2 = new ae.chart.model.trace.Scatter().set({
    	  x: [2, 3, 4, 5],
    	  y: [16, 5, 11, 9],
    	  mode: 'lines',
    	  yaxis:'y2'
      });

      //Third trace
      var scatter3 = new ae.chart.model.trace.Scatter().set({
    	  x: [1, 2, 3, 4],
    	  y: [12, 9, 15, 12],
    	  mode: 'lines+markers'
      });
      
      //Add traces to chart's model
      //Method1 - Can't be used once the model is passed to the widget (addTrace event is not triggered)
      /*var traces = new qx.data.Array();
      traces.push(scatter1);
      traces.push(scatter2);
      traces.push(scatter3);
      chartModel.setTraces(traces);*/
      //Method2 - Can't be used once the model is passed to the widget (addTrace event is not triggered)
      chartModel.getTraces().push(scatter1);
      //Method3 - Prefered
      chartModel.addTrace(scatter2);
      chartModel.addTrace(scatter3);
      
      //First axis
      var axis = new ae.chart.model.axis.Axis();
      axis.setColor("#1f77b4");
      
      //Second axis
      var axis2 = new ae.chart.model.axis.Axis();
      axis2.setColor("#ff7f0e");
      axis2.setSide("right");
      axis2.setOverlaying("y");
      
      //Add axes to layout
      var axes = new qx.data.Array();
      axes.push(axis);
      axes.push(axis2);
      chartLayout.setYaxes(axes);
      
      //Create chart widget with model
      var chart = new ae.chart.ui.Chart(chartModel);
      
      chart.addListener("changeLayout",function(e){
			console.log(e.getData());
		},chart);
      
      //Add chart to qooxdoo app
      var doc = this.getRoot();
      doc.set({backgroundColor:"#FFF"});
      
      var tabView = new qx.ui.tabview.TabView();
      tabView.setWidth(500);

      var page1 = new qx.ui.tabview.Page("Pie");
      page1.setLayout(new qx.ui.layout.VBox());
      page1.add(new ae.chart.test.PieTest(),{flex:1});
      tabView.add(page1);
      
      var page2 = new qx.ui.tabview.Page("Scatter");
      page2.setLayout(new qx.ui.layout.VBox());
      page2.add(new ae.chart.test.ScatterTest(),{flex:1});
      tabView.add(page2);
      
      var con = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      con.add(chart,{flex:1});
      
      var page3 = new qx.ui.tabview.Page("Test");
      page3.setLayout(new qx.ui.layout.VBox());
      page3.add(con,{flex:1});
      tabView.add(page3);
      
      var buttons = new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({
    	  margin: [0, 0, 30, 0]
      });
      var button1 = new qx.ui.form.Button("Change layout");
      button1.addListener("execute",function(e){
          chartLayout.setTitle("My new title");
          var titlefont = new ae.chart.model.Font(36,["Arial","verdana"]);
          titlefont.setColor("#ff7f0e");
          chartLayout.setTitlefont(titlefont);
      });
      
      var button2 = new qx.ui.form.Button("Change data");
      button2.addListener("execute",function(e){
          
          scatter1.setY([[8, 15, 22, 17]]);

      });
      
      var button3 = new qx.ui.form.Button("Change trace");
      button3.addListener("execute",function(e){

          scatter1.setName("Temperature");
          scatter1.setMode("lines+markers");
          
          var marker = new ae.chart.model.trace.auxiliary.Marker();
          marker.setSize(12);
          marker.setSymbol("square");
          marker.setColor("#d62728");
          scatter1.setMarker(marker);
          
          var line = new ae.chart.model.trace.auxiliary.Line();
          line.setWidth(4);
          line.setColor("#ff9896");
          scatter1.setLine(line);
      });
      
      var button4 = new qx.ui.form.Button("Change axis");
      button4.addListener("execute",function(e){
          axis.setColor("#2ca02c");
          axis.setRange([0,50]);
      });
      
      var button5 = new qx.ui.form.Button("Add trace");
      button5.addListener("execute",function(e){
    	  this.scatter = new ae.chart.model.trace.Scatter();
    	  this.scatter.setX([1, 2, 3, 4]);
    	  this.scatter.setY([20, 18, 22, 10]);
    	  this.scatter.setMode("lines");
          chartModel.addTrace(this.scatter);
          //chartModel.moveTrace(this.scatter,0);
          button5.setEnabled(false);
          button6.setEnabled(true);
      },this);
      
      var button6 = new qx.ui.form.Button("Remove trace").set({
    	  enabled:false
      });
      button6.addListener("execute",function(e){
    	  chartModel.removeTrace(this.scatter);
    	  button5.setEnabled(true);
    	  button6.setEnabled(false);
      },this);
      
      buttons.add(new qx.ui.core.Spacer(), {flex: 1});
      buttons.add(button1);
      buttons.add(button2);
      buttons.add(button3);
      buttons.add(button4);
      buttons.add(button5);
      buttons.add(button6);
      buttons.add(new qx.ui.core.Spacer(), {flex: 1});
      con.add(buttons);
      
      doc.add(tabView, {edge: 0});

    }
  }
});
