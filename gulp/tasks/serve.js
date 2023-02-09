module.exports = function() {
    $.gulp.task('serve', function() {
        $.bs.init({
            server: {
                baseDir: "./dist",
                index: "index.html",
                open: false,
                browser: false
            }
        });
    });
}
