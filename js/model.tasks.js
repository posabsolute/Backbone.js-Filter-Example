myapp.model.Tasks = Backbone.Model.extend({
	default:{
		completed:0,
		name: ""
	},
	url:"/js/libs/fixtures/task.json"

});


var tasks1 = new myapp.model.Tasks({
		completed:0,
		name: "Clear dishes"
	}
);

var tasks2 = new myapp.model.Tasks({
		completed:1,
		name:"Get out the trash"
	}
);


var tasks3 = new myapp.model.Tasks({
		completed:0,
		name:"Do the laundry"
	}
);


var tasks4 = new myapp.model.Tasks({
		completed:1,
		name:"Vacuuming the carpet"
	}
);











