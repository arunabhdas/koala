FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});


FlowRouter.route('/projects-all', {
	name: 'projects-all',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Projects'});
	}
});
