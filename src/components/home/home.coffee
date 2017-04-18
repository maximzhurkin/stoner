define [
	'jquery'
	'css!/assets/components/home/home'
], ($) ->
	{
		render: ->
			# Получаем шаблон для рендера
			$.get '/assets/components/home/home.html', (template) ->
				# Рендерим
				$('#homePageLayout').html Mustache.render(template)
				return
			return
	}
