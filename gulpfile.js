// Dependencies that makes this all work! Yay packages!
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del'),
    inlineCSS = require('gulp-inline-css'),
    preprocess = require('gulp-preprocess'),
    rename = require('gulp-rename'),
    strip = require('gulp-strip-comments');

// Load in environment variables from .boilerplate.defaults first and then .boilerplate.custom if it exists
var boilerplateConfig = require('dotenv-extended').load(
    {
        encoding: 'utf8',
        silent: true,
        path: '.boilerplate.custom',
        defaults: '.boilerplate.defaults',
        errorOnMissing: false,
        errorOnExtra: false,
        assignToProcessEnv: true,
        overrideProcessEnv: true
    }
);

// We need to check if DOCTYPE_VERSION is using an XHTML value for inline-css purposes later
var currentSetDoctype = process.env.DOCTYPE_VERSION;
if (/XHTML/i.test(currentSetDoctype)) {
    xmlMode = true;
} else {
    xmlMode = false;
}

// Clean out the build directories
gulp.task('clean', function () {
    return del(
        [
            'tmp/css/**', 
            'tmp/html-samples/**',
            'dist/boilerplate/**'
        ]
    ).then(paths => {
        console.log('Cleaning directories :\n', paths.join('\n'));
    });
});

// Pre-process CSS files with config values
gulp.task('preprocess-css', function() {
    var stream = gulp.src('./app/css/*.css')
    .pipe(preprocess())
    .pipe(gulp.dest('./tmp/css/'))
    return stream;
});

// Minify processed CSS for inclusion in the email boilerplate
gulp.task('minify-css', ['preprocess-css'], function() {
    var stream = gulp.src('./tmp/css/*.css')
    .pipe(cleanCSS(
        {
            // We don't want to go too crazy when minifying, this is email after all!
            advanced: false,
            aggressiveMerging: false,
            debug: true, // Needed for the size output on before and after min files
            keepBreaks: true,
            keepSpecialComments: 0,
            shorthandCompacting: false,
            // Defensive for less friendly email clients
            compatibility: '*,' + 
            '-properties.colors,' +
            '-properties.zeroUnits'
        },
        // Log original size and minified size in gulp output
        function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + '.min' + ': ' + details.stats.minifiedSize);
        })
    )
    .pipe(rename({ extname: '.css.min' }))
    .pipe(gulp.dest('./tmp/css/'));
    return stream;
});

// Build all HTML samples, inline CSS and strip comments to be included in boilerplate
gulp.task('build-html-samples', function() {
    gulp.src('./app/html-samples/*.html')
    .pipe(preprocess())
    .pipe(inlineCSS(
        {
            applyStyleTags: true,
            removeStyleTags: true,
            removeHtmlSelectors: true,
            applyTableAttributes: true,
            xmlMode: xmlMode
        }
    ))
    .pipe(strip(
        {
            safe: true,
            trim: true
        }
    ))
    .pipe(gulp.dest('./tmp/html-samples/'));
});

// Build email boilerplate HTML and put everything together!
gulp.task('preprocess-boilerplate', ['minify-css'], function() {
    // We only want to target this file for HTML processing, the guidelines version is static and legacy
    var email_boilerplate_file = 'app/email-boilerplate.html.preprocess';
    var stream = gulp.src(email_boilerplate_file)
    .pipe(preprocess({ extension: 'html' }))
    .pipe(rename('email-boilerplate.html'))
    .pipe(gulp.dest('./dist/boilerplate/'))
    return stream;
});

// Inline CSS to main layout elements after boilerplate is generated and update it
gulp.task('inline-css', ['preprocess-boilerplate'], function() {

    var stream = gulp.src('./dist/boilerplate/email-boilerplate.html')
    .pipe(inlineCSS(
        {
            /* 
             * Currently there is a bug with inline-css when having both
             * applyTableAttributes and applyWidthAttributes set to true
             * More info: https://github.com/jonkemp/inline-css/issues/46
             * A hack is to not define px values on width properties
             * that target any table related element.
             * 
            */
            applyTableAttributes: true,
            applyWidthAttributes: true,
            applyStyleTags: false,
            applyLinkTags: true,
            removeStyleTags: false,
            removeLinkTags: true,
            xmlMode: xmlMode
        }
    ))
    .pipe(gulp.dest('./dist/boilerplate/'));
    return stream;
});

// Detect certain configurations and warn when they are less optimal
gulp.task('check-config', ['inline-css'], function() {

    var isMsoNamespacesEnabled = process.env.ENABLE_VML_NAMESPACES;
    var isXuaCompatMetaTagEnabled = process.env.ENABLE_XUA_COMPATIBLE_META_TAG;
    var xuaCompatValue = process.env.XAU_COMPATIBLE_VALUE;
    var isViewportMetaTagEnabled = process.env.ENABLE_VIEWPORT_META_TAG;
    var viewportValue = process.env.VIEWPORT_META_VALUE;
    var isFormatDetectionEnabled = process.env.ENABLE_FORMAT_DETECTION_META_TAG;
    var formatDetectionValue = process.env.FORMAT_DETECTION_META_VALUE;
    var isMsoDpiScalingFixEnabled = process.env.ENABLE_MSO_DPI_SCALING_FIX;
    var isWebkitMediaQueryEnabled = process.env.ENABLE_WEBKIT_DETECTION_QUERY;
    var isGeckoMediaQueryEnabled = process.env.ENABLE_GECKO_MEDIA_QUERY;
    var isIEMediaQueryEnabled = process.env.ENABLE_IE_10_11_MEDIA_QUERY;
    var isGmailAndroidFixEnabled = process.env.ENABLE_GMAIL_ANDROID_RESIZE_FIX;
    var isGmailiOSFontFixEnabled = process.env.ENABLE_GMAIL_IOS_FONT_FIX;
    var isTableContainerFixedWidth = process.env.TABLE_CONTAINER_FIXED_WIDTH;

    // Small function to re-use for warnings, because lazy
    function configWarn(configMessage) {
        var label = 'CONFIGURATION:'
        console.warn(label, configMessage)
    }

    // While they act as booleans, they aren't actually REAL booleans (quacks like a duck etc..)
    if((isMsoNamespacesEnabled === 'false') && (isMsoDpiScalingFixEnabled === 'true')) {
        configWarn('ENABLE_VML_NAMESPACES should be set to true when ENABLE_MSO_DPI_SCALING_FIX is set to true');
    }

    if(isXuaCompatMetaTagEnabled === 'false') {
        configWarn('You should strongly consider setting ENABLE_XUA_COMPATIBLE_META_TAG to true for better Windows Phone/IE compatibility');
    }

    if((isXuaCompatMetaTagEnabled === 'true') && (!/edge/i.test(xuaCompatValue))) {
        configWarn('Using any other value than IE=edge for XAU_COMPATIBLE_VALUE is not recommended');
    }

    if(isViewportMetaTagEnabled === 'false') {
        configWarn('You should strongly consider setting ENABLE_VIEWPORT_META_TAG to true for correct scaling on mobile devices');
    }

    if((isViewportMetaTagEnabled === 'true') && (/user-scalable=no/i.test(viewportValue))) {
        configWarn('You should not disable pinch zooming/resizing gestures, it is bad UX');
    }

    if((isFormatDetectionEnabled === 'true') && (/no/i.test(formatDetectionValue))) {
        configWarn('Disabling auto formatting data also disables any user interaction events i.e. tap to call');
    }

    if(isWebkitMediaQueryEnabled === 'true') {
        configWarn('The Webkit vendor prefixes return true on some non-webkit clients, do not rely on it for accurate detection');
    }

    if(isGeckoMediaQueryEnabled === 'true') {
        configWarn('The Gecko/Mozilla media query is often mangled in Yahoo! Mail and can cause unexpected CSS issues');
    }

    if(isIEMediaQueryEnabled === 'true') {
        configWarn('The IE 10/11 media query will also return true on IEMobile (Windows Phone 8.0/8.1)');
    }

    if((isGmailAndroidFixEnabled === 'true') && (isTableContainerFixedWidth === 'false')) {
        configWarn('You should set ENABLE_GMAIL_ANDROID_RESIZE_FIX to false when not using a fixed width container table');
    }

    if((isGmailiOSFontFixEnabled === 'true') && (isTableContainerFixedWidth === 'false')) {
        configWarn('You should set ENABLE_GMAIL_IOS_FONT_FIX to false when not using a fixed width container table');
    }

    // Check for older .env file
    var fs = require('fs');
    fs.stat('.env', function(err, stat) {
        if(err == null) {
            configWarn('.env is deprecated, please rename your custom settings file to .boilerplate.custom');
        }
    });

});

// The order is important! The CSS pre-process stuff must happen first otherwise minify will break everything!
gulp.task('default', 
    [ 
        'clean', 
        'preprocess-css', 
        'minify-css',
        'build-html-samples',
        'preprocess-boilerplate', 
        'inline-css',
        'check-config'
    ]
);
