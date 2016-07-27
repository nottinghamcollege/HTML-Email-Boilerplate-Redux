// Dependencies that makes this all work! Yay packages!
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    del = require('del')
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

// We only want to target this file for HTML processing, the guidelines version is static and legacy
email_boilerplate_file = 'app/email-boilerplate.html.preprocess';

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

// Pre-process CSS files with .env values
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

// Build all HTML samples and strip comments to be included in boilerplate
gulp.task('build-html-samples', function() {
    gulp.src('./app/html-samples/*.html')
    .pipe(preprocess())
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
    var stream = gulp.src(email_boilerplate_file)
    .pipe(preprocess({ extension: 'html' }))
    .pipe(rename('email-boilerplate.html'))
    .pipe(gulp.dest('./dist/boilerplate/'))
    return stream;
});

// Inline CSS to main layout elements after boilerplate is generated and update it
gulp.task('inline-css', ['preprocess-boilerplate'], function () {
    
    // We need to check if DOCTYPE_VERSION is using an XHTML value
    var currentSetDoctype = process.env.DOCTYPE_VERSION;
    if (/XHTML/i.test(currentSetDoctype)) {
        xmlMode = true;
    } else {
        xmlMode = false;
    }

    var stream = gulp.src('./dist/boilerplate/email-boilerplate.html')
    .pipe(inlineCSS(
        {
            applyTableAttributes: true,
            applyStyleTags: false,
            applyLinkTags: true,
            applyWidthAttributes: true,
            removeStyleTags: false,
            removeLinkTags: true,
            xmlMode: xmlMode
        }
    ))
    .pipe(gulp.dest('./dist/boilerplate/'));
    return stream;
});

// The order is important! The CSS pre-process stuff must happen first otherwise minify will break everything!
gulp.task('default', 
    [ 
        'clean', 
        'preprocess-css', 
        'minify-css',
        'build-html-samples',
        'preprocess-boilerplate', 
        'inline-css' 
    ]
);
