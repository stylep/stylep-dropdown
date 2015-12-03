var gulp = require('gulp');
var postcss = require('gulp-postcss');
var simplevars = require('postcss-simple-vars');
var cssimport = require('postcss-import');
var nested = require('postcss-nested');
var mixins = require('postcss-mixins');
var extend = require('postcss-extend');

// Compile css into /example
gulp.task('css', function() {
        var processors = [
                cssimport,
                mixins,
                simplevars,
                nested,
                extend
        ];
        return gulp.src('example/index.css')
                .pipe(postcss(processors))
                .pipe(gulp.dest('example/build'));
});

gulp.task('watch', function() {

        // Watch css and compile upon file changed
        gulp.watch('test.css', ['css']);
});

