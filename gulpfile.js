/*
* @Author: lcm
* @Date:   2017-04-07 14:39:57
* @Last Modified by:   lcm
* @Last Modified time: 2017-04-26 17:47:39
*/
'use strict';
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    jade = require('gulp-jade');
let debug = false;
let count = 0;


// basePath
const basePath = {
    browserSyncSrc: 'src/template/',
    jade: {
        beforeSrcUrl: ['src/jade/*.jade', 'src/jade/**/*.jade', '!src/jade/_*.jade', '!src/jade/**/_*.jade'],
        afterSrcUrl: 'src/template/',
        afterFirstSrcUrl : 'pages/',
    }
};

// jade
gulp.task('jade', function() {
    var source = basePath.jade.beforeSrcUrl;
    var stream = gulp.src(source);
    count++;
    var _path=basePath.jade.afterFirstSrcUrl;
    if(count==1){
        _path=basePath.jade.afterFirstSrcUrl
    }else{
      _path=basePath.jade.afterSrcUrl
    }
    if (debug) {
        stream = stream.pipe(watch(source));
    }
    return stream
    .pipe(jade({
        pretty: true,
        debug: true,
    }))
    .pipe(gulp.dest( _path))
    
});
gulp.task('jade2html', function() {
    watch(basePath.jade.beforeSrcUrl, function() {
        gulp.run('jade');
    });
});

// browserSync
var files = [
    '**/*.html',
    '**/*.css',
    '**/*.js'
];
gulp.task('browserSyncFn', function() {
    browserSync.init(files);
    gulp.watch(basePath.browserSyncSrc).on('change', browserSync.reload);
});

// 编译jade
gulp.task('default', ['jade2html','browserSyncFn']);



