## Usage

The default configuration of the email boilerplate should provide a common basis for most email campaigns, however if you want to customise the email boilerplate you need to modify the pre-process variables within `gulpfile.js`.

### Configuration variables

The full list of configuration variables is below and their purpose.

#### Main document

```
DOCTYPE_VERSION: 'XHTML_TRANSITIONAL|XHTML_STRICT|HTML5' (default: XHTML_TRANSITIONAL)
Purpose: Output a common doctype used in email templates
```

```
DOCUMENT_TITLE: string
Purpose: Ability to set a specific <title> for the HTML document
```

```
ENABLE_FAVICON: boolean (default: true)
Purpose: Define a favicon reference which is used by some email clients/web version
```

```
FAVICON_URL: string
Purpose: Full URL path to ico file
Example: http://media.centralnottingham.ac.uk/favicon.ico
```

#### MSO (Microsoft Office) code

```
ENABLE_MSO_DPI_SCALING_FIX: boolean (default: true)
Purpose: Boolean to include MSO DPI fix directly
```

```
ENABLE_MSO_FALLBACK_FONT: boolean (default: true)
Purpose: Boolean to include a specific CSS block that targets main layout elements
```

```
MSO_DEFAULT_FALLBACK_FONT_STACK: string
Purpose: Ability to set a web safe font stack Windows based Outlook clients will use when using web fonts
Example: Helvetica, Arial, sans-serif
```

#### CSS Reset/head rules

```
ENABLE_AOL_WEBMAIL_CSS_CLASS: boolean (default: false)
Purpose: Boolean to include a specific CSS class that will be rendered by AOL Webmail clients
```

```
DEFAULT_ANCHOR_COLOUR: string
Purpose: Ability to set a global <a> colour in the <head>.
Example: #e6057f
```

```
DEFAULT_ANCHOR_VISITED_COLOUR: string
Purpose: Ability to set a global visited <a> colour in the <head>
Example: #ff0000
```

```
ENABLE_VISITED_ANCHOR_CSS: boolean (default: false)
Purpose: Boolean to include CSS to target visited links (no all clients support this styling)
```

```
ENABLE_HEADER_SELECTORS_CSS: boolean (default: false)
Purpose: Boolean to include CSS rules that target <h1> - <h6> tags
```

```
ENABLE_YAHOO_SHORTCUTS_CSS_CLASSES: boolean (default: false)
Purpose: Boolean to include CSS rules that target automatically converted links in Yahoo! (shortcuts)
```

#### CSS3 Media Queries

```
ENABLE_MEDIA_SCREEN_QUERY: boolean (default: true)
Purpose: Boolean to include a media screen query, useful for include webfonts with @font-face or import
```

```
ENABLE_YAHOO_MEDIA_QUERY: boolean (default: false)
Purpose: Boolean to include a specific yahoo media query that will be rendered in Yahoo! webmail
```

```
ENABLE_IE_10_11_MEDIA_QUERY: boolean (default: false)
Purpose: Boolean to include a specific IE 10/11 media query that targets both desktop and mobile
```

```
ENABLE_WEBKIT_DETECTION_QUERY: boolean (default: false)
Purpose: Boolean to include a specific webkit query that will be used on any Webkit client
```

```
ENABLE_MAX_DEVICE_WIDTH_MEDIA_QUERY: boolean (default: true)
Purpose: Boolean to include a media query that is triggered on TABLE_CONTAINER_WIDTH
```

```
ENABLE_RETINA_3X_MEDIA_QUERY: boolean (default: false)
Purpose: Boolean to include a media query that targets devices with a pixel density of 3x the standard
```

```
ENABLE_RETINA_2X_MEDIA_QUERY: boolean (default: false)
Purpose: Boolean to include a media query that targets devices with a pixel density of 2x the standard
```

```
ENABLE_RETINA_1X_MEDIA_QUERY: boolean (default: false)
Purpose: Boolean to include a media query that targets devices with a pixel density slighty higher than normal
```

#### Other CSS

```
ENABLE_ANDROID_4_4_CENTRE_FIX: boolean (default: true)
Purpose: Boolean to include an attribute selector that normalises the margin on Android 4.4
```

#### Main `<body>`

```
ENABLE_PREHEADER: boolean (default: true)
Purpose: Boolean to include a <span> following the <body> tag for the preheader
```

```
PREHEADER_TEXT: string
Purpose: Variable to control the preheader value
Example: Example Preheader text
```

```
TABLE_CONTAINER_WIDTH: numeric (default: 600)
Purpose: Set the width of the container table
```

```
ENABLE_GMAIL_ANDROID_FIX: boolean (default: true)
Purpose: Boolean to include a spacer image the same size as TABLE_CONTAINER_WIDTH to prevent Gmail force scaling the email
```

```
ENABLE_GMAIL_IOS_FONT_FIX: boolean (default: true)
Purpose: Boolean to include special div block to prevent Gmail iOS app auto scaling fonts
```


#### Misc

```
PLACEHOLDER_IMG_URL: string
Purpose: Variable to store URL path to placeholder images
Example: http://placehold.it
```
