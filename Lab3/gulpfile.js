let tsProject = ts.createProject("tsconfig.json");

import gulp from 'gulp';
import ts from 'gulp-typescript';


const buildTypescript = () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
}

export default () => {

    gulp.watch('./src/**/*', (cb) => {
        buildTypescript();
        cb();
    })

    buildTypescript();
}