define [
	'jquery'
	'css!/assets/components/newsDetail/newsDetail'
], ($) ->
	{
		render: ->
			# Получаем данные для рендера
			$.getJSON '/assets/components/newsDetail/newsDetail.json', (data) ->
				# Получаем шаблон для рендера
				$.get '/assets/components/newsDetail/newsDetail.html', (template) ->
					# Рендерим
					$('#newsDetailPageLayout').html Mustache.render(template, data)
					return
				return
			return
	}
