/* Author: 

*/
myapp.view.TasksContainer = Backbone.View.extend({
	events: {
		"keyup #searchTask" : "search",
		"change #taskSorting":"sorts"
	},
	render: function(data) {
		$(this.el).html(this.template);
		return this;
	},
	renderList : function(tasks){
		$("#taskList").html("");

		tasks.each(function(task){
			var view = new myapp.view.TasksItem({
				model: task,
				collection: this.collection
			});
			$("#taskList").append(view.render().el);
		});
		return this;
	},
	initialize : function(){
		this.template = _.template($("#list_container_tpl").html());
		this.collection.bind("reset", this.render, this);
	},
	search: function(e){
		var letters = $("#searchTask").val();
		this.renderList(this.collection.search(letters));
	},	
	sorts: function(e){
		var status = $("#taskSorting").find("option:selected").val();
		if(status == "") status = 0;
		this.renderList(this.collection.currentStatus(status));
	}
});