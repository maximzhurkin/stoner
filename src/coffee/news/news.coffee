define [
	'jquery',
	'css!/components/news/news'
], ->
	_rendered = false
	{
		init: ->
			if _rendered == false
				@render()
			return
		render: ->
			# Получаем данные для рендера
			$.getJSON '/components/news/news.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/components/news/news.html', (template) ->
					# Рендерим
					$('#news').html Mustache.render(template, data)
					
					# Меняем состояние на отрендеренно
					_rendered = true
					return
				return
			return
	}