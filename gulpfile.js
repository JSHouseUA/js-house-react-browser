var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	spritesmith = require('gulp.spritesmith'),
	rimraf = require('rimraf'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

/*--------------Server--------------*/
gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: "build"
		},
		notify: false
	});
	gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*--------------HTML compile--------------*/
gulp.task('html:compile', function () {
	return gulp.src('source/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('build'))
});

/*--------------Sass compile--------------*/
gulp.task('sass:compile', function () {
	return gulp.src('source/sass/main.+(sass|scss)')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7']
		}))
		.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('build/css'));
});

/*----------------JS-----------------*/
var jsOrder = [
	'source/js/jquery.min.js',
	'source/js/site.min.js',
	'source/js/main.js'
];

gulp.task('js:compile', function () {
	return gulp.src(jsOrder)
		.pipe(sourcemaps.init())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./build/js'));
});

gulp.task('js:compile-min', function () {
	return gulp.src(jsOrder)
		.pipe(sourcemaps.init())
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./build/js'));
});

/*--------------Sprites--------------*/
gulp.task('sprite', function (cb) {
	var spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		imgPath: '../images/sprite.png',
		cssName: 'sprite.scss'
	}));

	spriteData.img.pipe(gulp.dest('build/images'));
	spriteData.css.pipe(gulp.dest('source/sass/global'));
	cb();
});

/*--------------Delete--------------*/
gulp.task('clean', function del(cb) {
	return rimraf('build', cb);
});

/*--------------Copy fonts--------------*/
gulp.task('copy:fonts', function () {
	return gulp.src('./source/fonts/**/*.*')
		.pipe(gulp.dest('build/fonts'));
});


/*--------------Copy images--------------*/
gulp.task('copy:images', function () {
	return gulp.src('./source/images/**/*.*')
		.pipe(gulp.dest('build/images'));
});

/*--------------Copy php--------------*/
gulp.task('copy:php', function () {
	return gulp.src('./source/php/**/*.php')
		.pipe(gulp.dest('build/php'));
});

/*--------------Copy libs--------------*/
gulp.task('copy:libs', function () {
	return gulp.src('./source/libs/**/*.*')
		.pipe(gulp.dest('build/libs'));
});

/*--------------Copy other--------------*/
gulp.task('copy:other', function () {
	var otherSrc = [
		'./source/*.*'
	];
	return gulp.src(otherSrc)
		.pipe(gulp.dest('build/'))
});

/*--------------Copy --------------*/
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images', 'copy:php', 'copy:libs', 'copy:other'));

/*--------------Watchers--------------*/
gulp.task('watch', function () {
	gulp.watch(['source/sass/**/*.scss', 'source/sass/**/*.css'], gulp.series('sass:compile'));
	gulp.watch('source/js/**/*.js', gulp.series('js:compile'));
	gulp.watch('source/img/**/*.*', gulp.series('copy:images'));
	gulp.watch('source/php/**/*.php', gulp.series('copy:php'));
	gulp.watch('source/fonts/**/*.*', gulp.series('copy:fonts'));
	gulp.watch('source/fonts/**/*.*', gulp.series('copy:libs'));
	gulp.watch('source/fonts/**/*.*', gulp.series('copy:other'));
});

gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('sass:compile', 'js:compile-min', 'sprite', 'copy'),
	gulp.parallel('watch', 'server')
));

gulp.task('test', gulp.series(
	'clean',
	gulp.parallel('sass:compile', 'js:compile', 'sprite', 'copy'),
	gulp.parallel('watch', 'server')
));