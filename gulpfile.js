// Dependencies
var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var rename = require("gulp-rename");
 
gulp.task('default', function() {
    var preprocess_template_file = 'app/email-boilerplate-preprocess.html';
    gulp.src(preprocess_template_file)
    .pipe(preprocess(
        {
            context: 
                {
                    // 
                    // Pre-processing variables for customisation of email boilerplate template
                    //

                    // DOCTYPE, HEAD AND META
                    DOCTYPE_VERSION: 'XHTML_TRANSITIONAL',
                    DOCUMENT_TITLE: 'Central College Nottingham',
                    ENABLE_FAVICON: true,
                    FAVICON_URL: 'http://media.centralnottingham.ac.uk/favicon.ico',

                    // MSO CONDITIONAL CODE
                    ENABLE_MSO_DPI_SCALING_FIX: true,
                    ENABLE_MSO_FALLBACK_FONT: true,
                    MSO_DEFAULT_FALLBACK_FONT_STACK: 'Helvetica, Arial, sans-serif',

                    // CSS CONFIGURATION IN THE HEAD
                    ENABLE_AOL_WEBMAIL_CSS_CLASS: false,
                    DEFAULT_ANCHOR_COLOUR: '#e6057f',
                    DEFAULT_ANCHOR_VISITED_COLOUR: '#ff0000',
                    ENABLE_VISITED_ANCHOR_CSS: false, // Not all email clients support this styling
                    ENABLE_HEADER_SELECTORS_CSS: false,
                    ENABLE_YAHOO_SHORTCUT_CSS_CLASSES: false,

                    // CSS3 MEDIA QUERIES
                    ENABLE_MEDIA_SCREEN_QUERY: true,
                    ENABLE_WEBKIT_DETECTION_QUERY: false,

                    // MAIN BODY
                    ENABLE_PREHEADER: true,
                    PREHEADER_TEXT: 'Example Preheader text here',
                    TABLE_CONTAINER_WIDTH: '600', // px is included in the source
                    ENABLE_GMAIL_ANDROID_FIX: true,
                    ENABLE_GMAIL_IOS_FONT_FIX: true,

                    // MISC
                    PLACEHOLDER_IMG_URL: 'http://placehold.it'
                }
            }
        ))
    .pipe(rename("email-boilerplate-without-guidelines.html"))
    .pipe(gulp.dest('./dist/'))

    gulp.watch(preprocess_template_file), ['default'];
});