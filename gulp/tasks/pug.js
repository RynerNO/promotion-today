module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.bs.reload);
    });
}
