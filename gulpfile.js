// Dependencies
var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var rename = require("gulp-rename");
 
gulp.task('default', function() {
  gulp.src('email-boilerplate-preprocess.html')
    .pipe(preprocess(
    	{
    		context: 
    			{
                    // Pre-processing variables
    				DOCTYPE_VERSION: 'XHTML_TRANSITIONAL',
                    DOCUMENT_TITLE: 'Central College Nottingham',
    				ENABLE_FAVICON: true,
                    FAVICON_URL: 'http://media.centralnottingham.ac.uk/favicon.ico',
                    ENABLE_PREHEADER: true,
                    PREHEADER_TEXT: 'Example Preheader text here',
                    ENABLE_GMAIL_ANDROID_FIX: true,
                    ENABLE_GMAIL_IOS_FONT_FIX: true
    			}
    		}
    	))
    .pipe(rename("email-boilerplate-without-guidelines.html"))
    .pipe(gulp.dest('./dist/'))

    gulp.watch('email-boilerplate-preprocess.html', ['default']);
});