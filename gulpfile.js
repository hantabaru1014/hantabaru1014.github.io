const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const del = require('del');
const beautify = require('gulp-jsbeautifier');
const http = require('http');
const st = require('st');
const path = require('path');
const cleanCSS = require('gulp-clean-css');

const SITE_GLOBAL_DATA = {
  siteTitle: 'バルのおもちゃ箱',
  basePath: '/',
}
const DEST_DIR = 'docs';

function renderEjs(){
  return gulp.src(['src/**/*.ejs', '!src/**/_*.ejs'])
    .pipe(ejs({'global': SITE_GLOBAL_DATA}))
    .pipe(rename({ extname: '.html' }))
    .pipe(beautify())
    .pipe(gulp.dest(DEST_DIR));
}

function compileSass(){
  const plugins = [
    tailwindcss(),
    autoprefixer()
  ];
  const p = gulp.src(['src/**/*.scss', '!src/**/_*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins));
  if (process.env.NODE_ENV === 'production') p.pipe(cleanCSS());
  p.pipe(gulp.dest(DEST_DIR));
  return p;
}

function clearDestDir(){
  return del([`${DEST_DIR}/**/*`]);
}

function copyStatic(){
  return gulp.src('staticAssets/**/*').pipe(gulp.dest(DEST_DIR));
}

function watch(cb){
  gulp.watch('src/**/*.ejs', renderEjs);
  gulp.watch('src/**/*.scss', compileSass);
  gulp.watch('staticAssets/**/*', copyStatic);
  cb();
}

function serve(cb){
  http.createServer(
    st({path: path.join(__dirname, DEST_DIR), index: 'index.html', cache: false})
  ).listen(8080, () => {
    console.log('Dev Server Hosted: http://localhost:8080');
    cb();
  });
}

const build = gulp.series(clearDestDir, gulp.parallel(renderEjs, compileSass, copyStatic));

exports.build = build;
exports.clear = clearDestDir;
exports.serve = serve;
exports.default = gulp.series(build, serve, watch);