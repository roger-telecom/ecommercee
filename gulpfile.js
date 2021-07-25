'use strict';

const Gulp = require('gulp');
const Sass = require('gulp-sass');

Sass.compiler = require('node-sass');

Gulp.task('default', watch);

Gulp.task('Sass', compilerSass);

function compilerSass(){

return gulp.src("src/scss/**/*.scss").pipe(Sass({outpuyStyle: "compressed"}).once("error", Sass.logError)).pipe(Gulp.dest("file:///C:/Users/drrog/ecommerce/ecommerce.css"));
    
}

function watch() {

Gulp.watch("src/scss/**/*.scss", compilerSass);

}