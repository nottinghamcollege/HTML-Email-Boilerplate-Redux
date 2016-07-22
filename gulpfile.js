// Dependencies
var gulp = require('gulp');
var preprocess = require('gulp-preprocess');
var rename = require('gulp-rename');
var preprocess_template_file = 'app/email-boilerplate-preprocess.html';

gulp.task('default', function() {
    gulp.src(preprocess_template_file)
    .pipe(preprocess(
        {
            context: 
                {
                    // 
                    // Pre-processing variables for customisation of email boilerplate template
                    // See USAGE.md for further information on these configuration variables
                    //

                    // DOCTYPE, HEAD AND META
                    DOCTYPE_VERSION: 'XHTML_TRANSITIONAL',
                    LANGUAGE_CODE: 'en',
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
                    ENABLE_VISITED_ANCHOR_CSS: false,
                    ENABLE_HEADER_SELECTORS_CSS: false,
                    ENABLE_YAHOO_SHORTCUTS_CSS: false,

                    // CSS3 MEDIA QUERIES
                    ENABLE_MEDIA_SCREEN_QUERY: true,
                    ENABLE_YAHOO_MEDIA_QUERY: false,
                    ENABLE_IE_10_11_MEDIA_QUERY: false,
                    ENABLE_WEBKIT_DETECTION_QUERY: false,
                    ENABLE_MAX_DEVICE_WIDTH_MEDIA_QUERY: true,
                    ENABLE_RETINA_3X_MEDIA_QUERY: false,
                    ENABLE_RETINA_2X_MEDIA_QUERY: false,
                    ENABLE_RETINA_1X_MEDIA_QUERY: false,

                    // Other CSS
                    ENABLE_ANDROID_4_4_CENTRE_FIX: true,

                    // MAIN BODY
                    ENABLE_PREHEADER: true,
                    PREHEADER_TEXT: 'Example Preheader text',
                    TABLE_CONTAINER_FIXED_WIDTH: true,
                    TABLE_CONTAINER_WIDTH: 600,
                    ENABLE_GMAIL_ANDROID_FIX: true,
                    ENABLE_GMAIL_IOS_FONT_FIX: true,

                    // MISC
                    PLACEHOLDER_IMG_URL: 'http://placehold.it'
                }
            }
        ))
    .pipe(rename('email-boilerplate-without-guidelines.html'))
    .pipe(gulp.dest('./dist/'))
});