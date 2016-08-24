/*
 * @Author: fengyun2
 * @Date:   2016-08-13 09:27:06
 * @Last Modified by:   baby
 * @Last Modified time: 2016-08-13 10:14:40
 */

'use strict';

const gulp = require('gulp')
const ts = require('gulp-typescript')
const merge = require('merge2')

const paths = {
    pages: ['app/*.html'],
    tsSrc: ['app/**/*.ts'],
    tsDist: 'dist/definitions',
    jsDist: 'dist/js',
    htmlDist: 'dist'
}

gulp.task('copyHtml', function() {
    return gulp.src(paths.pages)
        .pipe(gulp.dest(paths.htmlDist));
})

let tsProject = ts.createProject('tsconfig.json', {
    sortOutput: true,
    declaration: true,
    noExternalResolve: true,
    typescript: require('typescript')
});
// 编译为ts和js
gulp.task('scripts', function() {
    const tsResult = gulp.src(paths.tsSrc)
        .pipe(ts(tsProject))
    return merge([
        // tsResult.dts.pipe(gulp.dest(paths.tsDist)),
        tsResult.js.pipe(gulp.dest(paths.jsDist))
    ])
})

// 监听文件变化
gulp.task('watch', ['scripts'], function() {
    gulp.watch(paths.tsSrc, ['scripts'])
})

gulp.task('default', ['scripts', 'watch'])
