var config = require('./config');
var del = require('del');

module.exports = function(gulp) {
    gulp.task('clean', function() {
        del([
            config.dest + '*'
        ]);
    });
};