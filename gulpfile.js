const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();

gulp.task('clean', () => {
	return gulp.src('_prod', { read: false })
		.pipe($.clean({ force: true }));
});

gulp.task('asdf', ['clean'], () => {
	
});

gulp.task('uglify', ['concat'], () => {
/*
	return gulp.src(`dist/${pkg.name}-v${pkg.version}.js`)
		.pipe($.uglify())
		.pipe($.header(banners.min))
		.pipe($.rename(`${pkg.name}-v${pkg.version}.min.js`))
		.pipe(gulp.dest('dist'));
*/
});

//gulp.task('watch', () => {
//	gulp.watch('src/**/*.js', () => {
//		gulp.run('build');
//	});
//});

//gulp.task('build', ['clean', 'concat', 'uglify']);