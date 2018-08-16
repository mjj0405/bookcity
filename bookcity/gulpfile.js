var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var path = require('path');
var fs = require('fs');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var mock = require('./mock');
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >=4.0']
        }))
        // .pipe(concat('all.css'))
        .pipe(gulp.dest('./src/css'));
})
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
})

gulp.task('server', function() {
    return gulp.src('/src')
        .pipe(server({
            port: 8080,
            open: true,
            middleware: function(req, res) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return false;
                }
                if (/^\/api/.test(pathname)) {
                    res.end(mock(req.url));
                } else {
                    pathname = /(\.js|\.css|\.html)$/.test(pathname) ? pathname : 'index.html';
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }));
});
gulp.task('default', gulp.series('sass', 'server', 'watch'));
// gulp.task('serve', function() {
//     return gulp.src('./src/')
//         .pipe(server({
//             port: 8001,
//             middleware: function(req, res) {
//                 if (req.url === '/favicon.ico') {
//                     res.end('');
//                     return;
//                 };

//                 var pathname = url.parse(req.url).pathname;
//                 if (/^\/api/.test(pathname)) {
//                     //数据
//                 } else {
//                     ///bookcity .js.css.html
//                     pathname = /(\.js|\.css|\.html)$/.test(pathname) ? pathname : 'index.html';
//                     res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
//                 }
//             }
//         }))
// })