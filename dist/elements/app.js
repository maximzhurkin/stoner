require.config({
  baseUrl: '/',
  paths: {
    'jquery': 'vendors/jquery/dist/jquery',
    'modernizr': 'vendors/grunt-modernizr/lib/build-files/modernizr-latest',
    'Path': 'vendors/pathjs-amd/dist/path',
    'Mustache': 'vendors/mustache.js/mustache',
    'webFontLoader': 'vendors/webfontloader/webfontloader',
    'lazyload': 'vendors/jquery_lazyload/jquery.lazyload',
    'matchHeight': 'vendors/matchHeight/dist/jquery.matchHeight'
  },
  shim: {
    'Mustache': {
      exports: 'Mustache'
    },
    'lazyload': {
      deps: ['jquery']
    }
  },
  map: {
    '*': {
      'css': 'vendors/require-css/css'
    }
  }
});

require(['jquery', 'modernizr', 'Path', 'Mustache', 'webFontLoader', 'elements/news/news'], function($, modernizr, Path, Mustache, webFontLoader, news) {
  window.Mustache = Mustache;
  window.setPage = function(page) {
    $('main.page').removeClass('active');
    return $('main.page-' + page).addClass('active');
  };
  Path.map('#/').to(function() {
    return setPage('home');
  });
  Path.map('#/news').to(function() {
    setPage('news');
    return news.init();
  });
  Path.map('#/news/:id').to(function() {
    return alert('Выбранна новость: ' + this.params['id']);
  });
  Path.root('#/');
  Path.listen();
  webFontLoader.load({
    google: {
      families: ['Yesteryear', 'Roboto Slab:700:latin,cyrillic']
    }
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMvYXBwLmpzIiwic291cmNlcyI6WyJlbGVtZW50cy9hcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFSLENBQ0M7RUFBQSxPQUFBLEVBQVMsR0FBVDtFQUNBLEtBQUEsRUFDQztJQUFBLFFBQUEsRUFBYSw0QkFBYjtJQUNBLFdBQUEsRUFBYSwwREFEYjtJQUVBLE1BQUEsRUFBUSw4QkFGUjtJQUdBLFVBQUEsRUFBYSw4QkFIYjtJQUlBLGVBQUEsRUFBa0IscUNBSmxCO0lBS0EsVUFBQSxFQUFhLHlDQUxiO0lBTUEsYUFBQSxFQUFnQiw2Q0FOaEI7R0FGRDtFQVNBLElBQUEsRUFDQztJQUFBLFVBQUEsRUFBWTtNQUFBLE9BQUEsRUFBUyxVQUFUO0tBQVo7SUFDQSxVQUFBLEVBQVk7TUFBQSxJQUFBLEVBQU0sQ0FBRSxRQUFGLENBQU47S0FEWjtHQVZEO0VBWUEsR0FBQSxFQUFLO0lBQUEsR0FBQSxFQUFLO01BQUEsS0FBQSxFQUFPLHlCQUFQO0tBQUw7R0FaTDtDQUREOztBQWVBLE9BQUEsQ0FBUSxDQUNQLFFBRE8sRUFFUCxXQUZPLEVBR1AsTUFITyxFQUlQLFVBSk8sRUFLUCxlQUxPLEVBTVAsb0JBTk8sQ0FBUixFQU9HLFNBQUMsQ0FBRCxFQUFJLFNBQUosRUFBZSxJQUFmLEVBQXFCLFFBQXJCLEVBQStCLGFBQS9CLEVBQThDLElBQTlDO0VBR0YsTUFBTSxDQUFDLFFBQVAsR0FBa0I7RUFHbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxJQUFEO0lBQ2hCLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQyxXQUFmLENBQTJCLFFBQTNCO1dBQ0EsQ0FBQSxDQUFFLFlBQUEsR0FBZSxJQUFqQixDQUFzQixDQUFDLFFBQXZCLENBQWdDLFFBQWhDO0VBRmdCO0VBUWpCLElBQUksQ0FBQyxHQUFMLENBQVMsSUFBVCxDQUFjLENBQUMsRUFBZixDQUFrQixTQUFBO1dBQ2pCLE9BQUEsQ0FBUSxNQUFSO0VBRGlCLENBQWxCO0VBR0EsSUFBSSxDQUFDLEdBQUwsQ0FBUyxRQUFULENBQWtCLENBQUMsRUFBbkIsQ0FBc0IsU0FBQTtJQUNyQixPQUFBLENBQVEsTUFBUjtXQUNBLElBQUksQ0FBQyxJQUFMLENBQUE7RUFGcUIsQ0FBdEI7RUFHQSxJQUFJLENBQUMsR0FBTCxDQUFTLFlBQVQsQ0FBc0IsQ0FBQyxFQUF2QixDQUEwQixTQUFBO1dBQ3pCLEtBQUEsQ0FBTSxvQkFBQSxHQUF1QixJQUFDLENBQUEsTUFBTyxDQUFBLElBQUEsQ0FBckM7RUFEeUIsQ0FBMUI7RUFHQSxJQUFJLENBQUMsSUFBTCxDQUFVLElBQVY7RUFDQSxJQUFJLENBQUMsTUFBTCxDQUFBO0VBR0EsYUFBYSxDQUFDLElBQWQsQ0FDQztJQUFBLE1BQUEsRUFDQztNQUFBLFFBQUEsRUFBVSxDQUNULFlBRFMsRUFFVCxnQ0FGUyxDQUFWO0tBREQ7R0FERDtBQTNCRSxDQVBIIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZS5jb25maWdcblx0YmFzZVVybDogJy8nXG5cdHBhdGhzOlxuXHRcdCdqcXVlcnknOiAgICAndmVuZG9ycy9qcXVlcnkvZGlzdC9qcXVlcnknXG5cdFx0J21vZGVybml6cic6ICd2ZW5kb3JzL2dydW50LW1vZGVybml6ci9saWIvYnVpbGQtZmlsZXMvbW9kZXJuaXpyLWxhdGVzdCdcblx0XHQnUGF0aCc6ICd2ZW5kb3JzL3BhdGhqcy1hbWQvZGlzdC9wYXRoJ1xuXHRcdCdNdXN0YWNoZSc6ICAndmVuZG9ycy9tdXN0YWNoZS5qcy9tdXN0YWNoZSdcblx0XHQnd2ViRm9udExvYWRlcic6ICAndmVuZG9ycy93ZWJmb250bG9hZGVyL3dlYmZvbnRsb2FkZXInXG5cdFx0J2xhenlsb2FkJzogICd2ZW5kb3JzL2pxdWVyeV9sYXp5bG9hZC9qcXVlcnkubGF6eWxvYWQnXG5cdFx0J21hdGNoSGVpZ2h0JzogICd2ZW5kb3JzL21hdGNoSGVpZ2h0L2Rpc3QvanF1ZXJ5Lm1hdGNoSGVpZ2h0J1xuXHRzaGltOlxuXHRcdCdNdXN0YWNoZSc6IGV4cG9ydHM6ICdNdXN0YWNoZSdcblx0XHQnbGF6eWxvYWQnOiBkZXBzOiBbICdqcXVlcnknIF1cblx0bWFwOiAnKic6ICdjc3MnOiAndmVuZG9ycy9yZXF1aXJlLWNzcy9jc3MnXG5cbnJlcXVpcmUgW1xuXHQnanF1ZXJ5J1xuXHQnbW9kZXJuaXpyJ1xuXHQnUGF0aCdcblx0J011c3RhY2hlJ1xuXHQnd2ViRm9udExvYWRlcidcblx0J2VsZW1lbnRzL25ld3MvbmV3cydcbl0sICgkLCBtb2Rlcm5penIsIFBhdGgsIE11c3RhY2hlLCB3ZWJGb250TG9hZGVyLCBuZXdzKSAtPlxuXG5cdCMgKGZpeCkg0JTQtdC70LDQtdC8INCz0LvQvtCx0LDQu9GM0L3Ri9C8INC+0LHRitC10LrRgtC+0Lwg0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGAXG5cdHdpbmRvdy5NdXN0YWNoZSA9IE11c3RhY2hlXG5cblx0IyDQk9C70L7QsdCw0LvRjNC90YvQuSDQvNC10YLQvtC0INC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDRgdGC0YDQsNC90LjRhlxuXHR3aW5kb3cuc2V0UGFnZSA9IChwYWdlKSAtPlxuXHRcdCQoJ21haW4ucGFnZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKSAjINCh0LrRgNGL0LLQsNC10Lwg0LDQutGC0LjQstC90YvQtSDQstGB0LUg0YHRgtGA0LDQvdC40YbRi1xuXHRcdCQoJ21haW4ucGFnZS0nICsgcGFnZSkuYWRkQ2xhc3MoJ2FjdGl2ZScpICMg0JDQutGC0LjQstC40YDRg9C10Lwg0L/QtdGA0LXQtNCw0L3QvdGD0Y4g0LIg0LzQtdGC0L7QtCDRgdGC0YDQsNC90LjRhtGDXG5cdFx0IyDQlNCw0LvQtdC1INCy0L7Qt9C80L7QttC90Ysg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQvtC/0LXRgNCw0YbQuNC4INC/0L4g0Y3Qu9C10LzQtdC90YLQsNC8INC90LDQstC40LPQsNGG0LjQuCDQuCDRgi7QtC5cblx0XHQjINCd0LDQv9GA0LjQvNC10YAg0YHQsdGA0L7RgdC40YLRjCDQvtGC0LrRgNGL0YLQvtC1INC80LXQvdGOLi4uXG5cblx0IyDQoNC+0YPRgtC40L3Qsy4uLlxuXHQjINCT0LvQsNCy0L3QsNGPINGB0YLRgNCw0L3QuNGG0LBcblx0UGF0aC5tYXAoJyMvJykudG8gLT5cblx0XHRzZXRQYWdlKCdob21lJylcblx0IyDQodGA0LDQvdC40YbQsCDQv9GA0LjQstC10YLRgdGC0LLQuNGPXG5cdFBhdGgubWFwKCcjL25ld3MnKS50byAtPlxuXHRcdHNldFBhZ2UoJ25ld3MnKVxuXHRcdG5ld3MuaW5pdCgpICMg0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutC+0LzQv9C+0L3QtdC90YIgbmV3c1xuXHRQYXRoLm1hcCgnIy9uZXdzLzppZCcpLnRvIC0+XG5cdFx0YWxlcnQgJ9CS0YvQsdGA0LDQvdC90LAg0L3QvtCy0L7RgdGC0Yw6ICcgKyBAcGFyYW1zWydpZCddXG5cblx0UGF0aC5yb290ICcjLycgIyDQmtC+0YDQtdC90Yxcblx0UGF0aC5saXN0ZW4oKSAjINCh0YLQsNGA0YLRg9GA0LXQvCDRgNC+0YPRgtC10YBcblxuXHQjINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LfQsNCz0YDRg9C30YfQuNC6INGI0YDQuNGE0YLQvtCyXG5cdHdlYkZvbnRMb2FkZXIubG9hZFxuXHRcdGdvb2dsZTpcblx0XHRcdGZhbWlsaWVzOiBbXG5cdFx0XHRcdCdZZXN0ZXJ5ZWFyJ1xuXHRcdFx0XHQnUm9ib3RvIFNsYWI6NzAwOmxhdGluLGN5cmlsbGljJ1xuXHRcdFx0XVxuXG5cdHJldHVyblxuIl19
