qx.Class.define("ae.chart.test.BarTest", {
	extend : qx.ui.core.Widget,

	construct : function() {
		this.base(arguments);

		//Create chart's model
		var chartModel = new ae.chart.model.Chart();

		
		var bar = new ae.chart.model.trace.Bar().set({
			x : [ '2016-01-01', '2016-01-03', '2016-01-06', '2016-01-07' ],
			width: [24*60*60*1000*2,24*60*60*1000*3,24*60*60*1000,24*60*60*1000],
			y : [ 16, 5, 11, 9 ]
		});
		bar.setOffset(0);

		chartModel.addTrace(bar);

		var chart = new ae.chart.ui.Chart(chartModel);		

		return chart;

	}
});
