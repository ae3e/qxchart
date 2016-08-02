/**
 * Controller links charts's model and Plotly chart
 * 
 * @ignore(Plotly.*)
 */

qx.Class.define("ae.chart.controller.Plotly",
{
	extend : qx.core.Object,
	
	properties : {
		/**
		 * Model of the chart
		 */
		model : {
			check : "ae.chart.model.Chart",
			apply : "_applyModel",
			nullable : true,
			init : null
		},
		/**
		 * Chart widget
		 */
		target :{
			//check : "",
			nullable : true,
			init : null
		}
	},
	
	/**
	 * Creates an instance of the Plotly's controller
	 * 
	 * @param model {ae.chart.model.Chart} chart's model
	 * @param target {object} Chart widget
	 * 
	 */
	construct : function(model, target){

		target.addListener("resize", function (e) {
        	if(target.getPlotlyDiv()){
        		Plotly.Plots.resize(target.getPlotlyDiv());
        	}
        },target);
		
		this.setTarget(target);
		this.setModel(model);
		this._initModel(model);
		
	},
	
	members : {
		_applyModel : function(value){
			//this._initModel(value);
		},
		
		/**
		 * Init the model
		 * @param model {ae.chart.model.Chart} chart's model
		 */
		_initModel : function(model){
			if(!model){
				return;
			}

			//Init the chart with data in the model
			
			var obj = model.toJson();

			Plotly.newPlot(this.getTarget().getPlotlyDiv(),obj.data,obj.layout,model.getConfig());
			
			window.plotdiv = this.getTarget().getPlotlyDiv();
			//Bind model to the chart by adding listeners to the model			
			model.addListener("changeBubble", function(e){
				
				var name = e.getData().name;
				var value = e.getData().value;
				var item = e.getData().item;
				
				var obj={};
				
				if(name.startsWith("layout")){
					var attr = name.substr(name.indexOf(".")+1);
					
					if(attr.startsWith("xaxes") || attr.startsWith("yaxes")){
						
						//If update the axes array (check if array and only one point in name : layout.axes[1] and not layout.axes[1].range
						var count = (name.match(/\./g) || []).length;
						if(Array.isArray(value) && count==1){

							//x or y define from layout.xaxis[...
							var ax = name[7];

							var layout = this.getTarget().getPlotlyDiv().layout;
							//Remove all existing axes
							for(o in layout){
								var regex = new RegExp(ax+"axis\d*");
								if(o.match(regex)){
									delete layout[o];
								}
							}
							//Re-create all axes from model
							for(var i=0;i<item.length;i++){	
								var a;
								if(i==0){
									//x or y axis
									a = ax + "axis";
								}else{
									//x2, y2, y3... axis
									a = ax + "axis"+(i+1);
								}
								layout[a] = ae.chart.util.Serializer.toNativeObject(item.getItem(i));
							}

							Plotly.redraw(this.getTarget().getPlotlyDiv());
							return;
						}
						
						//Update an axis attribute
						var index =parseInt(attr.substring(attr.indexOf("[")+1,attr.indexOf("]")));
						if(index==0){
							//x or y axis
							attr = (attr.substring(0,attr.indexOf("["))+attr.substr(attr.indexOf("]")+1)).replace("e","i");
						}else{
							//x2, y2, y3... axis
							attr = (attr.substring(0,attr.indexOf("["))+(index+1)+attr.substr(attr.indexOf("]")+1)).replace("e","i");
						}
					}
					//Update axis attribute or layout attribute
					obj[attr]= ae.chart.util.Serializer.toNativeObject(value);
					
					if(obj[attr]!=null){
						Plotly.relayout(this.getTarget().getPlotlyDiv(),obj);
					}
					
				}
				
				if(name.startsWith("traces")){
					
					//If update the traces array (check if array and no point in name : traces[1] and not traces[1].x
					if(name.indexOf(".")==-1){
						//Re-create all traces from model
						var data = [];
						if(value.classname=="qx.data.Array"){
							//Case : model.setTraces(...)
							for(var i=0;i<item.getTraces().length;i++){	
								data.push(ae.chart.util.Serializer.toNativeObject(item.getTraces().getItem(i)));
							}
							this.getTarget().getPlotlyDiv().data = data.slice();
							Plotly.redraw(this.getTarget().getPlotlyDiv());
							return;
						}else{
							//Case : model.getTrace().push(...)
							//@todo Currently it collapse with addTrace, removeTrace and moveTrace events. 

							/*for(var i=0;i<item.length;i++){	
								data.push(ae.chart.util.Serializer.toNativeObject(item.getItem(i)));
							}
							this.getTarget().getPlotlyDiv().data = data.slice();
							Plotly.redraw(this.getTarget().getPlotlyDiv());
							return;
							*/
						}
					}else{
						//Update a trace attribute
						var attr = name.substr(name.indexOf(".")+1);
						var index =parseInt(name.substring(name.indexOf("[")+1,name.indexOf("]")));
						
						obj[attr]=ae.chart.util.Serializer.toNativeObject(value);
						
						//encapsulate data in array before to restyle
						for(var prop in obj){
							obj[prop] = [obj[prop]];
						}

						Plotly.restyle(this.getTarget().getPlotlyDiv(),obj,[index]);
					}
				}
			},this);			
			
			model.addListener("addTrace", function(e){
				Plotly.addTraces(this.getTarget().getPlotlyDiv(),ae.chart.util.Serializer.toNativeObject(e.getData()));				
			},this);
			
			model.addListener("removeTrace", function(e){
				Plotly.deleteTraces(this.getTarget().getPlotlyDiv(),e.getData());
			},this);
			
			model.addListener("moveTrace", function(e){
				Plotly.moveTraces(this.getTarget().getPlotlyDiv(),e.getData().currentIndex,e.getData().newIndex);
			},this);
			
			/**
			 * plotly_click (data)
			 * plotly_hover (data)
			 * plotly_unhover (data)
			 * plotly_beforehover ()
			 * plotly_selected //lasso selection
			 * plotly_relayout (event,eventdata)//
			 */
			var widget = this.getTarget();
			widget.getPlotlyDiv().on('plotly_click', function(data){
				widget.fireEvent("click", qx.event.type.Mouse, [{}, widget, widget, false, true]); 
				widget.fireDataEvent("clickTrace", data);
			});
			widget.getPlotlyDiv().on('plotly_hover', function(data){
				widget.fireDataEvent("overTrace", data);
			});
			widget.getPlotlyDiv().on('plotly_unhover', function(data){
				widget.fireDataEvent("outTrace", data);
			});
			widget.getPlotlyDiv().on('plotly_selected', function(data){
				widget.fireDataEvent("changeSelection", data);
			});
			widget.getPlotlyDiv().on('plotly_relayout', function(data){
				widget.fireDataEvent("changeLayout", data);
			});
		}
	}
});