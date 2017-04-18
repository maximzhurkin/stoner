require.config({
  baseUrl: '/assets/',
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

require(['components/app/app'], function(app) {
  app.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlcyI6WyJjb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFSLENBQ0M7RUFBQSxPQUFBLEVBQVMsVUFBVDtFQUNBLEtBQUEsRUFDQztJQUFBLFFBQUEsRUFBaUIsNEJBQWpCO0lBQ0EsV0FBQSxFQUFpQiwwREFEakI7SUFFQSxNQUFBLEVBQWlCLDhCQUZqQjtJQUdBLFVBQUEsRUFBaUIsOEJBSGpCO0lBSUEsZUFBQSxFQUFpQixxQ0FKakI7SUFLQSxVQUFBLEVBQWlCLHlDQUxqQjtJQU1BLGFBQUEsRUFBaUIsNkNBTmpCO0dBRkQ7RUFTQSxJQUFBLEVBQ0M7SUFBQSxVQUFBLEVBQVk7TUFBQSxPQUFBLEVBQVMsVUFBVDtLQUFaO0lBQ0EsVUFBQSxFQUFZO01BQUEsSUFBQSxFQUFNLENBQUUsUUFBRixDQUFOO0tBRFo7R0FWRDtFQVlBLEdBQUEsRUFBSztJQUFBLEdBQUEsRUFBSztNQUFBLEtBQUEsRUFBTyx5QkFBUDtLQUFMO0dBWkw7Q0FERDs7QUFlQSxPQUFBLENBQVEsQ0FDUCxvQkFETyxDQUFSLEVBRUcsU0FBQyxHQUFEO0VBRUYsR0FBRyxDQUFDLElBQUosQ0FBQTtBQUZFLENBRkgiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlLmNvbmZpZ1xuXHRiYXNlVXJsOiAnL2Fzc2V0cy8nXG5cdHBhdGhzOlxuXHRcdCdqcXVlcnknOiAgICAgICAgJ3ZlbmRvcnMvanF1ZXJ5L2Rpc3QvanF1ZXJ5J1xuXHRcdCdtb2Rlcm5penInOiAgICAgJ3ZlbmRvcnMvZ3J1bnQtbW9kZXJuaXpyL2xpYi9idWlsZC1maWxlcy9tb2Rlcm5penItbGF0ZXN0J1xuXHRcdCdQYXRoJzogICAgICAgICAgJ3ZlbmRvcnMvcGF0aGpzLWFtZC9kaXN0L3BhdGgnXG5cdFx0J011c3RhY2hlJzogICAgICAndmVuZG9ycy9tdXN0YWNoZS5qcy9tdXN0YWNoZSdcblx0XHQnd2ViRm9udExvYWRlcic6ICd2ZW5kb3JzL3dlYmZvbnRsb2FkZXIvd2ViZm9udGxvYWRlcidcblx0XHQnbGF6eWxvYWQnOiAgICAgICd2ZW5kb3JzL2pxdWVyeV9sYXp5bG9hZC9qcXVlcnkubGF6eWxvYWQnXG5cdFx0J21hdGNoSGVpZ2h0JzogICAndmVuZG9ycy9tYXRjaEhlaWdodC9kaXN0L2pxdWVyeS5tYXRjaEhlaWdodCdcblx0c2hpbTpcblx0XHQnTXVzdGFjaGUnOiBleHBvcnRzOiAnTXVzdGFjaGUnXG5cdFx0J2xhenlsb2FkJzogZGVwczogWyAnanF1ZXJ5JyBdXG5cdG1hcDogJyonOiAnY3NzJzogJ3ZlbmRvcnMvcmVxdWlyZS1jc3MvY3NzJ1xuXG5yZXF1aXJlIFtcblx0J2NvbXBvbmVudHMvYXBwL2FwcCdcbl0sIChhcHApIC0+XG5cdCMg0JjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQvtGB0L3QvtCy0L3QvtC5INC80L7QtNGD0LvRjFxuXHRhcHAuaW5pdCgpXG5cdHJldHVyblxuIl19
