module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('src/static/css/**/*.sass', $.gulp.series('sass'));
        $.gulp.watch('src/static/js/*.js', $.gulp.series($.gulp.parallel('scripts:webp', 'scripts'),));
        $.gulp.watch('src/static/img/*', $.gulp.series('img'));
        $.gulp.watch('src/static/fonts/*', $.gulp.series('fonts'));
        $.gulp.watch('src/static/svg/*', $.gulp.series('svg'));
    });
}
