var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	environments = require('gulp-environments'),
	watch = require('gulp-watch'),
	pug = require('gulp-pug'),
	coffee = require('gulp-coffee'),
	stylus = require('gulp-stylus'),
	htmlmin = require('gulp-htmlmin'),
	yaml = require('gulp-yaml'),
	uglify = require('gulp-uglify'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
		server: './dist/', // or proxy: 'stoner.dev:8888'
		notify: false
	});
});

gulp.task('json', function() {
	return gulp.src('./src/**/*.yml')
		.pipe(plumber())
		.pipe(yaml())
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream({ match: '**/*.json' }));
});

gulp.task('html', function() {
	return gulp.src('./src/**/*.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: '\t' // tabs
		}))
		.pipe(environments.production(htmlmin({ collapseWhitespace: true })))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
	return gulp.src('./src/**/*.coffee')
		.pipe(plumber())
		.pipe(environments.development(sourcemaps.init()))
		.pipe(coffee({ bare: true }))
		.pipe(environments.production(uglify()))
		.pipe(environments.development(sourcemaps.write()))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream({ match: '**/*.js' }));
});

gulp.task('css', function() {
	return gulp.src(['./src/**/*.styl', '!./src/_/*.styl'])
		.pipe(plumber())
		.pipe(environments.development(sourcemaps.init()))
		.pipe(stylus())
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'ios >= 7','firefox >=4','safari >=7','IE >=8','android >=2'] }))
		.pipe(environments.production(csso()))
		.pipe(environments.development(sourcemaps.write()))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('watch', function () {
	watch(['./src/**/*.yml'], function() {
		gulp.start('json');
	});
	watch(['./src/**/*.coffee'], function() {
		gulp.start('js');
	});
	watch(['./src/**/*.styl'], function() {
		gulp.start('css');
	});
	watch(['./src/**/*.pug'], function() {
		gulp.start('html');
	});
});

gulp.task('default', ['json', 'html', 'js', 'css', 'watch', 'serve']);