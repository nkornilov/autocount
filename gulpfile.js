var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var less = require('gulp-less');

var path = {
  HTML: 'src/index.html',
  STYLES: "src/styles/styles.less",
  MINIFIED_OUT_JS: 'build.min.js',
  MINIFIED_OUT_STYLES: 'build.css',
  OUT_JS: 'build.js',
  OUT_STYLES: 'styles.css',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC_JS: 'dist/src/js',
  DEST_SRC_STYLES: 'dist/src/styles',
  ENTRY_POINT: './src/js/App.js'
};

gulp.task('copy', function () {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('compile-less', function () {
  return gulp.src(path.STYLES)
    .pipe(less())
    .pipe(gulp.dest(path.DEST_SRC_STYLES))
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);
  gulp.watch(path.STYLES, ['compile-less']);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT_JS))
      .pipe(gulp.dest(path.DEST_SRC_JS));
    console.log('updated');
  })
    .bundle()
    .pipe(source(path.OUT_JS))
    .pipe(gulp.dest(path.DEST_SRC_JS));
});


gulp.task('build', function () {
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT_JS))
    .pipe(streamify(uglify(path.MINIFIED_OUT_JS)))
    .pipe(path.DEST_BUILD);
});

gulp.task('replaceHTMLBuild', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/js/' + path.MINIFIED_OUT_JS,
      'css': 'build/css/' + path.MINIFIED_OUT_STYLES
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('replaceHTMLDevelopment', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'src/js/' + path.OUT_JS,
      'css': 'src/styles/' + path.OUT_STYLES
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTMLBuild', 'build']);
gulp.task('default', ['compile-less', 'replaceHTMLDevelopment', 'watch']);
