var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src("./build/**/!(*.test.js|*.map)")
        .pipe(concat('genie.js'))
        .pipe(gulp.dest('./'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});