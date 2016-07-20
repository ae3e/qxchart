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
      
      //Layout
      var chartLayout = new ae.chart.model.layout.Layout().set({
    	  title:"My chart",
    	  plot_bgcolor:"#EEE",
    	  paper_bgcolor:"#FFF"
      });
      chartModel.setLayout(chartLayout);

      //First trace
      var scatter1 = new ae.chart.model.trace.Scatter();
      scatter1.setX([1, 2, 3, 4]);
      scatter1.setY([10, 15, 13, 17]);
      scatter1.setMode("markers");
      
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
      var traces = new qx.data.Array();
      traces.push(scatter1);
      traces.push(scatter2);
      traces.push(scatter3);
      chartModel.setTraces(traces);
      
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
      
     
      //Add chart to qooxdoo app
      var doc = this.getRoot();
      doc.set({backgroundColor:"#FFF"});
      var con = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      con.add(chart,{flex:1});
      
      var buttons = new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({
    	  margin: [0, 300, 30, 300]
      });
      var button1 = new qx.ui.form.Button("Change layout");
      button1.addListener("execute",function(e){
          chartLayout.setTitle("My new title");
          var titlefont = new qx.bom.Font(36,["Arial","verdana"]);
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
      
      buttons.add(new qx.ui.core.Spacer(), {flex: 1});
      buttons.add(button1);
      buttons.add(button2);
      buttons.add(button3);
      buttons.add(button4);
      buttons.add(new qx.ui.core.Spacer(), {flex: 1});
      con.add(buttons);
      
      doc.add(con, {edge: 0});

    }
  }
});
