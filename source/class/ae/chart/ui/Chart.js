﻿/**
 * Chart widget
 * 
 * @ignore(Plotly.*)
 * @ignore(saveAs.*)
 */
qx.Class.define("ae.chart.ui.Chart", {
	extend : qx.ui.core.Widget,
	
	properties : {
		/**
		 * Chart's model
		 */
		model : {
			check : "ae.chart.model.Chart",
			nullable : true,
			init : null
		}
	},
	
	events : {
		/**
		 * Fired when a trace is clicked
		 */
	    "clickTrace" : "qx.event.type.Data",
	    /**
	     * Fired when a trace is hovered
	     */
	    "overTrace" : "qx.event.type.Data",
	    /**
	     * Fired when trace is unhovered
	     */
	    "outTrace" : "qx.event.type.Data",
	    /**
	     * Fired when data are selected (with Box or Lasso tools only?)
	     */
	    "changeSelection" : "qx.event.type.Data",
	    /**
	     * Fired when chart is zoomed, panned or layout is changed
	     */
	    "changeLayout" : "qx.event.type.Data"
	},
	
	/**
	 * @param model {ae.chart.model.Chart} Chart's model
	 */
	construct : function(model) {
		this.base(arguments);

		this.setModel(model);
		
		this.addListenerOnce("appear", function(e){
			var controller = new ae.chart.controller.Plotly(model,this);
		},this);
	},

	members : {
		/**
		 * Get Plotly div
		 * @return {Element} Plotly div
		 */
		getPlotlyDiv : function(){
			return this.getContentElement().getDomElement();
		},
		
		/**
		 * Save chart as json, svg or image
		 * @param format {String} Format 'jpeg' | 'png' | 'json' | 'svg'
		 */
		saveAs : function(format, filename){
			switch (format){
			case "svg" :
				var gd = this.getPlotlyDiv();
				var svg = Plotly.Snapshot.toSVG(gd);
				console.log(svg);
				//??????????
				//svg = svg.replace(/"'Open Sans'",/g,'');
				var blob = new Blob([svg], {type: "text/plain;charset=utf-8"});
				
				filename += '.' + format;

				if(qx.core.Environment.get("browser.name")=="ie"){
					window.navigator.msSaveBlob(blob, filename);
				}else{
					var downloadLink = document.createElement('a');
		            downloadLink.href = window.URL.createObjectURL(blob);;
		            downloadLink.download = filename; // only supported by FF and Chrome

		            document.body.appendChild(downloadLink);
		            downloadLink.click();
		            document.body.removeChild(downloadLink);
				}
				
				break;
			
			case "json" :
				var json = JSON.stringify(this.getModel().toJson());
				var blob = new Blob([json], {type: "text/plain;charset=utf-8"});
				
				filename += '.' + format;

				if(qx.core.Environment.get("browser.name")=="ie"){
					window.navigator.msSaveBlob(blob, filename);
				}else{
					var downloadLink = document.createElement('a');
		            downloadLink.href = window.URL.createObjectURL(blob);;
		            downloadLink.download = filename; // only supported by FF and Chrome

		            document.body.appendChild(downloadLink);
		            downloadLink.click();
		            document.body.removeChild(downloadLink);
				}
				
				break;
				
			case "png" :
			case "jpeg" :
				
				//Should use canvg for IE11 : https://github.com/gabelerner/canvg
				
				var gd = this.getPlotlyDiv();


		        var ev = Plotly.Snapshot.toImage(gd, {format: format});

		        filename += '.' + format;

		        ev.once('success', function(result) {
		        	

		            var downloadLink = document.createElement('a');
		            downloadLink.href = result;
		            downloadLink.download = filename; // only supported by FF and Chrome

		            document.body.appendChild(downloadLink);
		            downloadLink.click();
		            document.body.removeChild(downloadLink);

		            ev.clean();
		        });

		        ev.once('error', function(err) {
		            gd._snapshotInProgress = false;


		            console.error(err);

		            ev.clean();
		        });
		        break;
			}
		}
	}
});
