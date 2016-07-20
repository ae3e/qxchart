/**
 * Trace
 */
qx.Class.define("ae.chart.model.trace.Trace", {
	type : "abstract",
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * Type
		 */
		type : {
			check : "String",
			nullable : true,
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
