'use strict';

module.exports = {
	app: {
		title: 'ClassGotcha',
		description: 'The Next Big Thing',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/metisMenu/dist/metisMenu.min.css',
        'public/lib/fontawesome/css/font-awesome.min.css',
        'public/lib/datatables/media/css/dataTables.bootstrap.min.css',
				'public/lib/fullcalendar/dist/fullcalendar.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/metisMenu/dist/metisMenu.min.js',
        'public/lib/PACE/pace.min.js',
        'public/scripts.js',
				'public/lib/angular/angular.js',
				'public/lib/datatables/media/js/jquery.dataTables.min.js',
				'public/lib/angular-datatables/dist/angular-datatables.min.js',
				'public/lib/datatables/media/js/dataTables.bootstrap.min.js',
				'public/lib/plugins/oclazyload/dist/ocLazyLoad.min.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-datatables/dataTables/angular-datatables.min.js',
				'public/lib/ng-img-crop/compile/minified/ng-img-crop.js',
				'public/lib/ng-file-upload/ng-file-upload-all.min.js',
				//'public/lib/Responsive/js/dataTables.responsive.min.js'
				'public/lib/moment/min/moment.min.js',
				'public/lib/angular-ui-calendar/src/calendar.js',
				'public/lib/fullcalendar/dist/fullcalendar.min.js',
				'public/lib/fullcalendar/dist/gcal.js',
				'public/lib/Chart.js/Chart.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
