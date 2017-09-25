define [
	'jquery'
	'css!/templates/project/assets/components/news/news'
], ($) ->
	{
		render: ->
			# Получаем данные для рендера
			$.getJSON '/templates/project/assets/components/news/news.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/templates/project/assets/components/news/news.html', (template) ->
					# Рендерим
					$('#newsPageLayout').html Mustache.render(template, data)
					return
				return
			return
	}
