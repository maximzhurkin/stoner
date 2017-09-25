define [
	'jquery'
	'modernizr'
	'Path'
	'Mustache'
	'webFontLoader'
	'components/header/header'
	'components/footer/footer'
	'components/home/home'
	'components/news/news'
	'components/newsDetail/newsDetail'

	'css!/templates/project/assets/components/app/app'
], (
	$
	modernizr
	Path
	Mustache
	webFontLoader
	header
	footer
	home
	news
	newsDetail
) ->

	_page = (page) ->
		$('[data-page]').removeClass('active') # Деактивируем все страницы
		$('[data-page=' + page + ']').addClass('active') # Активируем переданную в метод страницу
		return
	{
		init: ->
			# (fix) Делаем глобальным объектом шаблонизатор
			window.Mustache = Mustache

			header.render()
			footer.render()

			# Маршрутизация...
			# Главная страница
			Path.map('#/').to ->
				home.render()
				_page('home')

			# Сраница новостей
			Path.map('#/news').to ->
				news.render() # Рендерим список новостей
				_page('news')

			Path.map('#/news/:id').to ->
				newsDetail.render(@params['id']) # Рендерим конкретную новость
				_page('newsDetail')

			Path.root '#/' # Корень
			Path.listen() # Запускаем роутер

			# Инициализируем загрузчик шрифтов
			webFontLoader.load
				google:
					families: [
						'Yesteryear'
						'Roboto Slab:700:latin,cyrillic'
					]
			return

		setPage: (page) ->
			_page(page)
			return
	}
