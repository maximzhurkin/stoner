define [
	'jquery'
	'css!/templates/project/assets/components/home/home'
], ($) ->
	{
		render: ->
			# Получаем шаблон для рендера
			$.get '/templates/project/assets/components/home/home.html', (template) ->
				# Рендерим
				$('#homePageLayout').html Mustache.render(template)
				return
			return
	}
