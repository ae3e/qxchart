qx.Class.define("ae.chart.test.ScatterTest", {
	extend : qx.ui.core.Widget,

	construct : function() {
		this.base(arguments);

		//Create chart's model
		var chartModel = new ae.chart.model.Chart();

		var chartLayout = new ae.chart.model.layout.Layout().set({
			paper_bgcolor : "rgba(0,0,0,0)",
			width : 200
		});
		chartModel.setLayout(chartLayout);

		//First trace
		var scatter = new ae.chart.model.trace.Scatter().set({
			x : [ 2, 3, 4, 5 ],
			y : [ 16, 5, 11, 9 ],
			mode : 'markers'
		});

		chartModel.addTrace(scatter);

		var chart = new ae.chart.ui.Chart(chartModel);
		return chart;

	}
});
