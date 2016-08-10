qx.Class.define("ae.chart.test.DatasourceTest", {
	extend : qx.ui.container.Composite,

	construct : function() {
		this.base(arguments);
		this.setLayout(new qx.ui.layout.VBox());
		
		//Create chart's model
		var chartModel = new ae.chart.model.Chart();

		var chartLayout = new ae.chart.model.layout.Layout().set({
			paper_bgcolor : "rgba(0,0,0,0)",
			width : 200
		});
		chartModel.setLayout(chartLayout);

		//First trace
		var scatter = new ae.chart.model.trace.Scatter().set({
			x : [ "2015-01", "2015-02", "2015-04", "2015-05" ],
			y : [ 16, 5, 11, 9 ],
			mode : 'markers+lines'
		});
		var ds1 = new ae.chart.model.Datasource().set({
			id:"ds1",
			url:"https://cors4js.appspot.com?url=http://ichart.finance.yahoo.com/table.csv?",
			parameters:{
				"s":"YHOO",
				"a":"3",
				"b":"12",
				"c":"2015",
				"d":"1",
				"e":"28",
				"f":"2016",
				"g":"w"
			}
		});
		var source = new ae.chart.model.trace.auxiliary.Source().set({
			id:"ds1",
			formatter:"CSV",
			parameters:{
				x:0,
				y:6
			}
		});
		scatter.setSource(source);
		var ds = new qx.data.Array();
		ds.push(ds1);
		chartModel.setDatasources(ds);


		chartModel.addTrace(scatter);


		var chart = new ae.chart.ui.Chart(chartModel);		
		

		this.add(chart,{flex:1});
		
		var button = new qx.ui.form.Button("update");
		button.addListener("execute",function(e){
			/*source.setParameters({
				x:0,
				y:5
			});*/
			
			ds1.setParameters({
				"s":"GOOG",
				"a":"3",
				"b":"12",
				"c":"2015",
				"d":"1",
				"e":"28",
				"f":"2016",
				"g":"w"
			});
		});
		this.add(button);

	}
});
