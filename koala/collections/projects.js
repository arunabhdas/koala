Projects = new Meteor.Collection('projects');

Projects.allow({
	insert:function(userId, doc) {
		return !!userId;
	}
});


ProjectSchema = new SimpleSchema({

	name: {
		type: String, 
		label: "Name"
	},

	desc: {
		type: String,
		label: "Description"
	},

	manager: {
		type: String,
		label: "Manager",
		autoValue: function() {
			return this.userId
		}
	},

	createdAt: {
		type: String,
		label: "Created At",
		autoValue: function() {
			return new Date()
		}
	}

});

Projects.attachSchema(ProjectSchema);