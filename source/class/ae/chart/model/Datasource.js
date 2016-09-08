/**
 * Datasource (Non-plotly property. Used with https://github.com/adeliz/plotly.datasources)
 */
qx.Class.define("ae.chart.model.Datasource", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Id
		 */
		id : {
			check : "String",
			event : "changeId",
			apply : "_apply",
			init : ""
		},
		
		/**
		 * Url
		 */
		url : {
			check : "String",
			init : "http://",
			event : "changeUrl",
			apply : "_apply"
		},
		
		/**
		 * Method
		 */
		method : {
			check : ["GET"],
			init : "GET",
			event : "changeMethod",
			apply : "_apply"
		},
		
		/**
		 * Parameters
		 */
		parameters : {
			//check : "Object",
			event : "changeParameters",
			nullable : true,
			apply : "_apply",
			init : null
		},
		
		/**
		 * Data
		 */
		data : {
			event : "changeData",
			nullable : true,
			apply : "_apply",
			init : null
		}
	},


	/*construct : function() {
		this.base(arguments);

	},*/
	
	members : {
		/**
	     * Apply function for every property created. It fires and
	     * {@link #changeBubble} event on every change. It also adds the chaining
	     * listener if possible which is necessary for the bubbling of the events.
	     *
	     * @param value {var} The new value of the property.
	     * @param old {var} The old value of the property.
	     * @param name {String} The name of the changed property.
	     */
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
