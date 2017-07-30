const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('clean', () => {
	return gulp.src('_prod/', { read: false })
		.pipe($.clean({ force: true }));
});

gulp.task('copy-base', ['clean'], () => {
	gulp.src('css/style.css')
		.pipe(gulp.dest('_prod/css/'));
	gulp.src('favicon.ico')
		.pipe(gulp.dest('_prod/'));
	gulp.src('fonts/*')
		.pipe(gulp.dest('_prod/fonts/'));
	gulp.src('images/**/*')
		.pipe(gulp.dest('_prod/images/'));
	gulp.src('js/*.min.js')
		.pipe(gulp.dest('_prod/js/'));
	gulp.src('mail.php')
		.pipe(gulp.dest('_prod/'));
	return gulp.src('pdf/*.pdf')
		.pipe(gulp.dest('_prod/pdf/'));
});

gulp.task('htmlmin', ['clean'], () => {
	const opts = {
		minifyJS: true,
		minifyCSS: true,
		removeComments: true,
		collapseWhitespace: true
	};
	gulp.src('index.php')
		.pipe($.htmlmin(opts))
		.pipe(gulp.dest('_prod/'));
	return gulp.src('includes/*.php')
		.pipe($.htmlmin(opts))
		.pipe(gulp.dest('_prod/includes/'));
});

gulp.task('sass', () => {
	return gulp.src('css/sass/**/*.scss')
		.pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
		.pipe(gulp.dest('css/'));
});

gulp.task('uglify', ['clean'], () => {
	return gulp.src(['js/*.js', '!js/*.min.js'])
		.pipe($.uglify())
		.pipe(gulp.dest('_prod/js/'));
});

gulp.task('watch-sass', () => {
	gulp.watch('css/sass/**/*.scss', () => {
		gulp.run('sass');
	});
});

gulp.task('build', ['clean', 'copy-base', 'htmlmin', 'uglify']);