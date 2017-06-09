var config = require('./config');
var sourcemaps = require('gulp-sourcemaps');
var browsersync = require('browser-sync');
var notify = require('gulp-notify');
var size = require('gulp-size');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');
var del = require('del');
var componentsSass = require('./componentsSass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp) {
    gulp.task('sass', ['componentsSass'], function() {
        var prodBuildStream = gulp.src(config.css.in);
        if (config.devBuild) {
                prodBuildStream = 
                prodBuildStream
                .pipe(sourcemaps.init())
                .pipe(sass(config.css.sassOpts))
                .on('error', notify.onError(function(error) {
                    return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
                }))
                .pipe(sourcemaps.write())
                // .pipe(size({ title: 'CSS in ' }))
                // .pipe(pleeease(config.css.pleeeaseOpts))
                // .pipe(size({ title: 'CSS out ' }))
                .pipe(gulp.dest(config.css.out))
                .pipe(notify({
                    message: 'Compilation Successful'
                }));
        } else {
            del([
                config.dest + 'css/*'
            ], { force: true });

            config.css.sassOpts.outputStyle = 'compressed';
            delete config.css.sassOpts.sourceComments;

            prodBuildStream = prodBuildStream
                .pipe(sass(config.css.sassOpts))
                .on('error', notify.onError(function(error) {
                    return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
                }))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))               // .pipe(gulp.dest(config.css.outcss))
                .pipe(notify({
                    message: "Compilation Successful"
                }))
                .pipe(uncss({
                    html: [config.html.in],
                    ignore: [
                        //new RegExp('^\.is.*'), // dynamic class use like this 'isActive'
                        ///\w\.in/,
                        //".fade",
                        //".collapse",
                        //".collapsing",
                        ///(#|\.)navbar(\-[a-zA-Z]+)?/,
                        ///(#|\.)dropdown(\-[a-zA-Z]+)?/,
                        /(#|\.)modal(\-[a-zA-Z]+)?/,
                        /(#|\.)spinning(\-[a-zA-Z]+)?/,
                        '.tooltip',
                        '.tooltip.in',
                        '.tooltip.top',
                        '.tooltip-inner',
                        '.tooltip-arrow',
                        '.tooltip.top .tooltip-arrow',
                        '.tooltip .tooltip-inner',
                        /\.open/,
                        /\.active/,
                        /(#|\.)global-search(\-[a-zA-Z]+)?/,
                        //".modal.fade.in",
                        //".modal-dialog",
                        //".modal-document",
                        //".modal-scrollbar-measure",
                        //".modal-backdrop.fade",
                        //".modal-backdrop.in",
                        //".modal.fade.modal-dialog",
                        //".modal.in.modal-dialog",
                        //".modal-open",
                        //".in",
                        //".modal-backdrop",
                        '.dropdown .ti-angle-down',
                        '.sidebar.left.toggled',
                        '.sidebar.right.toggled',
                        '.toggled.sdm-search-wrapper',
                        '.ti-heart.active',
                        //'.mCustomScrollBox',
                        ///\.mCSB_scrollTools/, // whoever use this or happen to use this
                        /\.alert/, // whoever use this or happen to use this
                        //'.ti-heart.active',
                        '.circular-btn[disabled]'
                    ]

                }))
                // .pipe(pleeease(config.css.pleeeaseOpts))
                .pipe(rename('main.min.css'))

                .pipe(sass({
                    outputStyle: 'compressed'
                }))

                .pipe(gulp.dest(config.css.out));

        }

        return prodBuildStream;
        //.pipe(browsersync.reload({ stream: true }));
    });
};
