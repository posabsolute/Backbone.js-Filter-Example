myapp.collection.Tasks = Backbone.Collection.extend({
	currentStatus : function(status){
		return _(this.filter(function(data) {
		  	return data.get("completed") == status;
		}));
	},
	search : function(letters){
		if(letters == "") return this;
		
		var pattern = new RegExp(letters,"gi");
		return _(this.filter(function(data) {
		  	return pattern.test(data.get("name"));
		}));
	}
});


myapp.collection.tasks = new myapp.collection.Tasks([tasks1,tasks2,tasks3,tasks4]);











