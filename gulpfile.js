var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var staticData = require('./data/static-data.json');


gulp.task('default', function () {

	options = {
		batch : ['./src/partials'],
		helpers : {
			capitals : function(str){
				return str.toUpperCase();
			}
		}
	}

	return gulp.src('src/main.handlebars')
		.pipe(handlebars(staticData, options))
		.pipe(rename('hello.html'))
		.pipe(gulp.dest('dist'));
});
