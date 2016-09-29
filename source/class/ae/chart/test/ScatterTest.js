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
		
		var annotations = new qx.data.Array();
		var annotation = new ae.chart.model.layout.Annotation().set({
			text : "Test",
			x :2,
			y : 2.5,
			xref : "x",
			yref : "y",
			showarrow:true
		});
		
		annotations.push(annotation);
		chartLayout.setAnnotations(annotations);
		chartModel.setLayout(chartLayout);

		//First trace
		var scatter = new ae.chart.model.trace.Scatter().set({
			x : [ 2, 3, 4, 5 ],
			y : [ 16, 5, 11, 9 ],
			mode : 'markers'
		});
		
		var bar = new ae.chart.model.trace.Bar().set({
			x : [ 2, 3, 4, 5 ],
			y : [ 16, 5, 11, 9 ]
		});

		chartModel.addTrace(scatter);
		chartModel.addTrace(bar);

		var chart = new ae.chart.ui.Chart(chartModel);		
		
		chart.addListener("clickTrace",function(e){
			console.log(e.getData());
		},chart);
		/*chart.addListener("overTrace",function(e){
			console.log(e.getData());
		},chart);
		chart.addListener("outTrace",function(e){
			console.log(e.getData());
		},chart);*/
		
		chart.addListener("changeSelection",function(e){
			console.log(e.getData());
		},chart);
		
		annotation.setBgcolor("red");
		return chart;

	}
});
