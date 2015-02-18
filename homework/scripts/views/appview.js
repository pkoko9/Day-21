var AppView = Backbone.View.extend({

	el: '#app',
	initialize: function() {

		// console.log(ProjectsCollection);
		// this.projects = new ProjectsCollection();

		this.loadingView = new loadingView({
			
		});

		this.homeView = new homeView({
			
		});

		this.playView = new playView({
		
		});

		this.leaderboardView = new leaderboardView({
			
		});

		this.settingsView = new settingsView({
			
		});
		
		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'loading': 'loading',
				'home': 'home',
				'play': 'play',
				'leaderboard': 'leaderboard',
				'settings': 'settings',
				'': 'loading'
			},

			loading: function() {
				console.log('loading...')
				self.hideAllPages();
				self.loadingView.$el.show();
			},

			home: function() {
				console.log('home')
				self.hideAllPages();
				self.homeView.$el.show();
			},

			play: function() {
				console.log('play')
				self.hideAllPages();
				self.playView.$el.show();
			},

			leaderboard: function() {
				console.log('leaderboard')
				self.hideAllPages();
				self.leaderboardView.$el.show();
			},

			settings: function() {
				console.log('settings')
				self.hideAllPages();
				self.settingsView.$el.show();
			},

		});

		var appRouter = new Router();

		Backbone.history.start();

	},

	hideAllPages: function() {
		$('.page-view').hide();
	}

});
