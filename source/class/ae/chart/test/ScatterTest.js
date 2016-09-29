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
		
		var shapes = new qx.data.Array();
		var line = new ae.chart.model.trace.auxiliary.Line().set({
			width:1,
			dash:"dash",
			color : "blue"
		});

		var shape = new ae.chart.model.layout.Shape().set({
			type : "rect",
			fillcolor : "yellow",
			layer : 'below',
			x0 : 2,
			x1 : 4,
			y0 : 2.5,
			y1 : 8,
			xref : "x",
			yref : "y"
		});
		shape.setLine(line);
		shapes.push(shape);
		chartLayout.setShapes(shapes);
		
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
