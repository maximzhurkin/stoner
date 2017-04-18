define [
	'jquery',
	'css!/elements/news/news'
], ->
	_rendered = false
	{
		init: ->
			if _rendered == false
				@render()
			return
		render: ->
			# Получаем данные для рендера
			$.getJSON '/elements/news/news.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/elements/news/news.html', (template) ->
					# Рендерим
					$('#news').html Mustache.render(template, data)

					# Меняем состояние на отрендеренно
					_rendered = true
					return
				return
			return
	}
