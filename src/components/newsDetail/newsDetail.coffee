define [
	'jquery'
	'css!/templates/project/assets/components/newsDetail/newsDetail'
], ($) ->
	{
		render: ->
			# Получаем данные для рендера
			$.getJSON '/templates/project/assets/components/newsDetail/newsDetail.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/templates/project/assets/components/newsDetail/newsDetail.html', (template) ->
					# Рендерим
					$('#newsDetailPageLayout').html Mustache.render(template, data)
					return
				return
			return
	}
