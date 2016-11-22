const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();

gulp.task('clean', () => {
	return gulp.src('_prod/', { read: false })
		.pipe($.clean({ force: true }));
});

gulp.task('copy', ['clean'], () => {
	gulp.src(['*.php', 'favicon.ico'])
		.pipe(gulp.dest('_prod/'));
	gulp.src('css/style.css')
		.pipe(gulp.dest('_prod/css/'));
	gulp.src('fonts/*')
		.pipe(gulp.dest('_prod/fonts/'));
	gulp.src('images/**/*')
		.pipe(gulp.dest('_prod/images/'));
	gulp.src('includes/*.php')
		.pipe(gulp.dest('_prod/includes/'));
	gulp.src(['js/*.js', 'js/*.min.js'])
		.pipe(gulp.dest('_prod/js/'));
	return gulp.src('pdf/*.pdf')
		.pipe(gulp.dest('_prod/pdf/'));
});

gulp.task('htmlmin', ['copy'], () => {
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

gulp.task('uglify', ['copy'], () => {
	return gulp.src(['js/*.js', '!js/*.min.js'])
		.pipe($.uglify())
		.pipe(gulp.dest('_prod/js/'));
});

gulp.task('watch-sass', () => {
	gulp.watch('css/sass/**/*.scss', () => {
		gulp.run('sass');
	});
});

gulp.task('build', ['clean', 'copy', 'htmlmin', 'uglify']);