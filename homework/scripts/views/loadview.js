var loadingView = Backbone.View.extend({

	el: '#loading-view',
	initialize: function(options) {
		
		setTimeout(function(options) {
			window.location.href = '#settings';}, 2000);

	}
	
});