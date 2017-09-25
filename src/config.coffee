require.config
	baseUrl: '/templates/project/assets/'
	paths:
		'jquery':        'vendors/jquery/dist/jquery'
		'modernizr':     'vendors/grunt-modernizr/lib/build-files/modernizr-latest'
		'Path':          'vendors/pathjs-amd/dist/path'
		'Mustache':      'vendors/mustache.js/mustache'
		'webFontLoader': 'vendors/webfontloader/webfontloader'
		'lazyload':      'vendors/jquery_lazyload/jquery.lazyload'
		'validate':      'vendors/jquery-validation/dist/jquery.validate'
		'matchHeight':   'vendors/matchHeight/dist/jquery.matchHeight'
	shim:
		'Mustache': exports: 'Mustache'
		'lazyload': deps: [ 'jquery' ]
		'validate': deps: ['jquery']
	map: '*': 'css': 'vendors/require-css/css'

require [
	'components/app/app'
], (app) ->
	# Инициализируем основной модуль
	app.init()
	return
