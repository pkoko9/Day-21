var AppView = Backbone.View.extend({
	el: '#game',
	initialize: function() {
		console.log(ProjectsCollection);
		this.projects = new ProjectsCollection();

		this.gameView = new GameView({
			projects: this.projects
		});
		this.leaderbordView = new LeaderBoardView({
			projects: this.projects
		});
		this.settingsView = new SettingsView({
			projects: this.projects
		});

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'home': 	'home',
				'resume': 	'resume',
				'projects': 'projects',
				'admin': 	'admin'
			},

			home: function() {
				console.log('home');
				self.hideAllPages();
				self.homeView.$el.show();
			},

			resume: function() {
				self.hideAllPages();
				self.resumeView.$el.show();
			},

			projects: function() {
				self.hideAllPages();
				self.projectsView.$el.show();
			},

			admin: function() {
				self.hideAllPages();
				self.adminView.$el.show();
			}
		});

		var appRouter = new Router();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.load-view').hide();
	}
});