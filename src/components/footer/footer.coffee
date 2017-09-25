define [
	'jquery'
	'css!/templates/project/assets/components/footer/footer'
], ($) ->
	{
		render: ->
			# Получаем шаблон для рендера
			$.get '/templates/project/assets/components/footer/footer.html', (template) ->
				# Рендерим
				$('#footerLayout').html Mustache.render(template)
				return
			return
	}
