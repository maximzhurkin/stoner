# stoner-spa

SPA boilerplate with gulp.

## Install
1. In project folder run in console
```
git clone https://github.com/maximzhurkin/stoner-spa.git .
```
2. Install node modules
```
npm install
```
3. Install bower components
```
bower install
```

## Start
You can also pass a command line flag --env to set it:

### Default (development)
```
gulp
```

### Build
```
gulp --env production
```

## New template
3. Rename 'project' templateName in files:
- /.bowerrc
- /.gitignore
- /gulpfile.js
- /src/_/config.styl
- /src/config.pug
- /src/config.coffee (baseUrl)
- and all components paths
