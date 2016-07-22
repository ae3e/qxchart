qx.Class.define("ae.chart.test.PieTest", {
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
		var pie = new ae.chart.model.trace.Pie().set({
			values : [ 19, 26, 55 ],
			labels : [ 'Residential', 'Non-Residential', 'Utility' ]
		});

		chartModel.addTrace(pie);

		var chart = new ae.chart.ui.Chart(chartModel);
		
		chart.addListener("click",function(e){
			console.log('click');
		});
		
		
		return chart;

	}
});
