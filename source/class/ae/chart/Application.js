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

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
      var con = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      var chartModel = new ae.chart.model.Chart();
      var chartLayout = new ae.chart.model.Layout();
      chartModel.setLayout(chartLayout);
      chartLayout.setTitle("Toto");
      chartLayout.setPlot_bgcolor("#AAA");
      
      var scatter = new ae.chart.model.traces.Scatter();
      scatter.setX([1, 2, 3, 4]);
      scatter.setY([10, 15, 13, 17]);
      //scatter.setYaxis("y2");
      
      var scatter2 = new ae.chart.model.traces.Scatter();
      scatter2.setX([1, 2, 3, 4]);
      scatter2.setY([13, 17, 15, 20]);
      scatter2.setYaxis("y2");

      
      
      var traces = new qx.data.Array();
      traces.push(scatter);
      traces.push(scatter2);
      chartModel.setTraces(traces);
      
      var axis = new ae.chart.model.axis.Axis();
      axis.setColor("#F0F");
      
      var axis2 = new ae.chart.model.axis.Axis();
      axis2.setColor("#0FF");
      axis2.setSide("right");
      axis2.setOverlaying("y");
      
      var axes = new qx.data.Array();
      axes.push(axis);
      axes.push(axis2);
      chartLayout.setYaxes(axes);
      
      //scatter.setYaxis
      var chart = new ae.chart.ui.Chart(chartModel);
      
     

      var doc = this.getRoot();

      con.add(chart,{flex:1});
      
      var button = new qx.ui.form.Button("Title");
      button.addListener("execute",function(e){
          chartLayout.setTitle("Tutu");
          var titlefont = new qx.bom.Font(36,["Arial","verdana"]);
          titlefont.setColor("#FFF");
          chartLayout.setTitlefont(titlefont);
          
          chartLayout.setPaper_bgcolor("#F00");
          
          scatter.setY([[2, 15, 1, 17]]);
          //scatter.setFillcolor("#00F");
          //scatter.setFill("tozeroy");
          //scatter.setMode("markers");
          scatter.setName("Temperature");
          
          
          var marker = new ae.chart.model.Marker();
          marker.setSize(12);
          marker.setColor("#FF0");
          scatter.setMarker(marker);
          
          var line = new ae.chart.model.Line();
          line.setWidth(4);
          line.setColor("#F0F");
          scatter.setLine(line);
          
          axis.setColor("#FFF");
      });
      
      
      con.add(button);
      
      doc.add(con, {edge: 0});

    }
  }
});
