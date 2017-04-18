define [
	'jquery'
	'css!/assets/components/news/news'
], ($) ->
	{
		render: ->
			# Получаем данные для рендера
			$.getJSON '/assets/components/news/news.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/assets/components/news/news.html', (template) ->
					# Рендерим
					$('#newsPageLayout').html Mustache.render(template, data)
					return
				return
			return
	}
