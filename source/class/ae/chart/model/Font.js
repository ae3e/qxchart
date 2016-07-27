/**
 * Font's model
 * I don't use ae.chart.model.Font because there's no event and so binding is not possible
 */
qx.Class.define("ae.chart.model.Font", {
	extend : qx.core.Object,
	include :  qx.data.marshal.MEventBubbling,
	
	properties : {
		/**
		 * family
		 */
		family : {
			check : "String",
			event : "changeFamily",
			apply : "_apply"
		},
		
		/**
		 * size
		 */
		size : {
			check : "Number",
			event : "changeSize",
			apply : "_apply"
		},
		
		/**
		 * color
		 */
		color : {
			check : "String",
			event : "changeColor",
			apply : "_apply"
		}
	},


	construct : function(size,family,color) {
		this.base(arguments);
		if(size){this.setSize(size);}
		if(family){this.setFamily(family);}
		if(color){this.setColor(color);}
	},
	
	members : {
		_apply : function(value, old, name){
			this._applyEventPropagation(value, old, name);
		}
	}
});
