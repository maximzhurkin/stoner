define [
	'jquery'
	'css!/assets/components/footer/footer'
], ($) ->
	{
		render: ->
			# Получаем шаблон для рендера
			$.get '/assets/components/footer/footer.html', (template) ->
				# Рендерим
				$('#footerLayout').html Mustache.render(template)
				return
			return
	}
