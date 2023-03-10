module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/static/css/*.sass')
            .pipe($.gp.sourcemaps.init())
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "style"
            }))
            // .pipe($.gp.csso())
            .pipe($.gs({ outputStyle: 'expanded' }))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 10 versions']
            }))
            // .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('dist/css/'))
            // Минифицированная версия
            .pipe($.gs({ outputStyle: 'compressed' }))
            .pipe($.gp.rename(function (path) {
                path.extname = ".min.css";
              }))
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest('dist/css/'))
            .on('end', $.bs.reload);

        // .pipe($.bs.reload({
        //     stream:true
        // }));
    });
}
