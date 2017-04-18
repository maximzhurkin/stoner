require.config 
	baseUrl: '/'
	paths:
		'jquery':    'vendors/jquery/dist/jquery'
		'modernizr': 'vendors/grunt-modernizr/lib/build-files/modernizr-latest'
		'Path': 'vendors/pathjs-amd/dist/path'
		'Mustache':  'vendors/mustache.js/mustache'
		'webFontLoader':  'vendors/webfontloader/webfontloader'
		'lazyload':  'vendors/jquery_lazyload/jquery.lazyload'
		'matchHeight':  'vendors/matchHeight/dist/jquery.matchHeight'
	shim: 
		'Mustache': exports: 'Mustache'
		'lazyload': deps: [ 'jquery' ]
	map: '*': 'css': 'vendors/require-css/css'

require [
	'jquery'
	'modernizr'
	'Path'
	'Mustache'
	'webFontLoader'
	'components/news/news'
], ($, modernizr, Path, Mustache, webFontLoader, news) ->
	
	# (fix) Делаем глобальным объектом шаблонизатор
	window.Mustache = Mustache

	# Глобальный метод для управления страниц
	window.setPage = (page) ->
		$('main.page').removeClass('active') # Скрываем активные все страницы
		$('main.page-' + page).addClass('active') # Активируем переданную в метод страницу
		# Далее возможны дополнительные операции по элементам навигации и т.д.
		# Например сбросить открытое меню...

	# Роутинг...
	# Главная страница
	Path.map('#/').to ->
		setPage('home')
	# Сраница приветствия
	Path.map('#/news').to ->
		setPage('news')
		news.init() # Инициализируем компонент news
	Path.map('#/news/:id').to ->
		alert 'Выбранна новость: ' + @params['id']

	Path.root '#/' # Корень
	Path.listen() # Стартурем роутер

	# Инициализируем загрузчик шрифтов
	webFontLoader.load
		google:
			families: [
				'Yesteryear'
				'Roboto Slab:700:latin,cyrillic'
			]

	return