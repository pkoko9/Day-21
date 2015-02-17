var SettingsView = Backbone.View.extend({
	el: '#settings-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'onAddProject'
		);
		console.log(options);
		this.projects = options.projects;

		this.$name = this.$el.find('#player-name');
		this.$description = this.$el.find('#skill-level');
		this.$addProjectButton = this.$el.find('#add-project-button');

		this.$addProjectButton.on('click', this.onAddProject);

	},

	onAddProject: function() {
		var p = new ProjectModel({
			name: this.$name.val(),
			url: this.$url.val(),
			description: this.$description.val()
		});
		this.projects.add(p);
		this.$name.val('');
		this.$url.val('');
		this.$description.val('');
	}
});



