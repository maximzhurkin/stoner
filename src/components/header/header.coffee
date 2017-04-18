define [
	'jquery'
	'css!/assets/components/header/header'
], ($) ->
	_rendered = false
	{
		init: ->
			if _rendered == false
				@render()
			return
		render: ->
			# Получаем шаблон для рендера
			$.get '/assets/components/header/header.html', (template) ->
				# Рендерим
				$('#headerLayout').html Mustache.render(template)
				# Меняем состояние на отрендеренно
				_rendered = true
				return
			return
	}
