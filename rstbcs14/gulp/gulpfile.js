var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify');

gulp.task('js', function(){
	return gulp.src(['js/**/*.js', '!js/lib/**/*.js'])
		.pipe(jshint('js/.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(gulp.src(['js/app.js']))
		.pipe(browserify())
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../js/'));
});

gulp.task('watch', function(){
	gulp.watch('js/**/*.js', ['js']);
});