# Usage

The default configuration of the email boilerplate should provide a common basis for most email campaigns, however if you want to customise any of the configuration you need to modify the config variables within a file called `.boilerplate.custom`. 

There is a default configuration file called `.boilerplate.defaults`, this is always loaded first to make sure all configuration variables are loaded with a default value to prevent any build errors e.g. if a new variable is added and your `.boilerplate.custom` file doesn't have it.

Your `.boilerplate.custom` file is ignored by Git so you don't need to worry about any of your changes being overwritten on any updates to the source. Ensure you keep an eye on any changes made to this documentation for new configuration variables/modified behaviour. Tweak the `.boilerplate.custom` file to your needs and build the email boilerplate with `gulp` with your customisations.

## Configuration variables

The full list of configuration variables is below and their purpose.

### Main document

```
DOCTYPE_VERSION (default: xhtml-transitional)
Type: string
Possible values: xhtml-transitional, xhtml-strict, html4, html5
Purpose: Output a common doctype used in email templates
```

```
LANGUAGE_CODE
Type: string
Purpose: Sets lang attribute value on root <html> tag
Example: en
```

```
ENABLE_VML_NAMESPACES (default: true)
Type: boolean
Purpose: Boolean to include VML namespaces on root <html> (needed for MSO specific code like VML)
```

```
CHARSET
Type: string
Purpose: Sets desired character set for the document
Example: utf-8
```

```
DOCUMENT_TITLE
Type: string
Purpose: Ability to set a specific <title> for the HTML document
Example: Central College Nottingham
```

```
ENABLE_FORMAT_DETECTION_META_TAG (default: false)
Type: boolean
Purpose: Boolean to stop devices automatically converting data like phone numbers and addresses into ineteractive links
```

```
FORMAT_DETECTION_META_VALUE
Type: string
Purpose: Provide data types to be ignored
Example: telephone=no
```

```
ENABLE_VIEWPORT_META_TAG (default: true)
Type: boolean
Purpose: Boolean to include the viewport meta tag
```

```
VIEWPORT_META_VALUE
Type: string
Purpose: Ability to set a specific viewport value
Example: width=device-width, initial-scale=1
```

```
ENABLE_XUA_COMPATIBLE_META_TAG (default: true)
Type: boolean
Purpose: Boolean to include a XUA-Compatible meta tag for IE clients
```

```
XUA_COMPATIBLE_VALUE
Type: string
Purpose: Set a document mode for Internet Explore clients to always use
Example: IE=edge
```

```
ENABLE_ROBOTS_META_TAG (default: false)
Type: boolean
Purpose: Boolean to include a meta robots tag
```                    

```
ROBOTS_META_VALUE
Type: string
Purpose: Provide a value for the meta robots tags
Example: noindex, nofollow
```

```
ENABLE_FAVICON (default: true)
Type: boolean
Purpose: Define a favicon reference which is used by some email clients/web version
```

```
FAVICON_URL
Type: string
Purpose: Full URL path to ico file
Example: http://media.centralnottingham.ac.uk/favicon.ico
```

### MSO (Microsoft Office) code

```
ENABLE_MSO_DPI_SCALING_FIX (default: true)
Type: boolean
Purpose: Boolean to include MSO DPI fix
```

```
ENABLE_MSO_CONDITIONAL_STYLING (default: true)
Type: boolean
Purpose: Boolean to include specific MSO CSS reset rules
```

```
ENABLE_MSO_FALLBACK_FONT (default: true)
Type: boolean
Purpose: Boolean to include a specific CSS block that targets main layout elements
```

```
MSO_DEFAULT_FALLBACK_FONT_STACK
Type: string
Purpose: Ability to set a web safe font stack Windows based Outlook clients will use when using web fonts
Example: Helvetica, Arial, sans-serif
```

#### CSS Reset `<head>`

```
ENABLE_GENERAL_SIBLING_SELECTOR_BUG_FIX (default: false)
Type: boolean
Purpose: Fix CSS sibling selector support in certain Android/iOS clients
```

```
DEFAULT_ANCHOR_COLOUR
Type: string
Purpose: Ability to set a global <a> colour in the <head>.
Example: #e6057f
```

```
DEFAULT_ANCHOR_VISITED_COLOUR
Type: string
Purpose: Ability to set a global visited <a> colour in the <head>
Example: #ff0000
```

```
ENABLE_VISITED_ANCHOR_CSS (default: false)
Type: boolean
Purpose: Boolean to include CSS to target visited links (no all clients support this styling)
```

```
ENABLE_HEADER_SELECTORS_CSS (default: false)
Type: boolean
Purpose: Boolean to include CSS rules that target <h1> - <h6> tags
```

```
ENABLE_YAHOO_SHORTCUTS_CSS_CLASSES (default: false)
Type: boolean
Purpose: Boolean to include CSS rules that target automatically converted links in Yahoo! (shortcuts)
```

#### CSS3 `@media` queries

```
ENABLE_WINDOWS_PHONE_VIEWPORT_FIX (default: false)
Type: boolean
Purpose: Boolean to include a specific at-rule to adjust the viewport on Windows Phone devices
```

```
ENABLE_MEDIA_SCREEN_QUERY (default: true)
Type: boolean
Purpose: Boolean to include a media screen query, useful for include webfonts with @font-face or import
```

```
ENABLE_YAHOO_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a specific yahoo media query that will be rendered in Yahoo! webmail
```

```
ENABLE_IE_10_11_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a specific IE 10/11 media query that targets both desktop and mobile
```

```
ENABLE_WEBKIT_DETECTION_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a specific webkit query that will be used on any Webkit client
```

```
ENABLE_GECKO_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a specific media query that targets Gecko based clients
```

```
ENABLE_MAX_DEVICE_WIDTH_MEDIA_QUERY (default: true)
Type: boolean
Purpose: Boolean to include a media query that is triggered on TABLE_CONTAINER_WIDTH
```

```
ENABLE_RETINA_3X_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a media query that targets devices with a pixel density of 3x the standard
```

```
ENABLE_RETINA_2X_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a media query that targets devices with a pixel density of 2x the standard
```

```
ENABLE_RETINA_1X_MEDIA_QUERY (default: false)
Type: boolean
Purpose: Boolean to include a media query that targets devices with a pixel density slighty higher than normal
```

### Other CSS

```
ENABLE_AOL_WEBMAIL_CSS_CLASS (default: false)
Type: boolean
Purpose: Boolean to include a specific CSS class that will be rendered by AOL Webmail clients
```

```
ENABLE_OFFICE_365_CSS_SELECTOR (default: false)
Type: boolean
Purpose: Boolean to include a specific CSS selector that will target Office 365
```

```
ENABLE_GMAIL_HIDE_DOWNLOAD_ICON_HACK (default: true)
Type: boolean
Purpose: Boolean to include a specific CSS selector that will remove the download icon on Gmail
```

```
ENABLE_ANDROID_4_4_CENTRE_FIX (default: true)
Type: boolean
Purpose: Boolean to include an attribute selector that normalises the margin on Android 4.4
```

### Main `<body>`

```
ENABLE_PREHEADER (default: true)
Type: boolean
Purpose: Boolean to include a <span> following the <body> tag for the preheader
```

```
PREHEADER_TEXT
Type: string
Purpose: Ability to provide a small sentence that will be the first text email clients will use in message/notification previews
Example: Example Preheader text
```

```
BODY_BG_COLOUR
Type: string
Purpose: Ability to set a specific hexidecimal colour for the background of the email
Example: #ffffff
```

```
TABLE_WRAPPER_CSS_ID
Type: string
Purpose: Ability to set a specific CSS ID for the first wrapping table
Example: main-wrapper
```

```
TABLE_CONTAINER_CSS_ID
Type: string
Purpose: Ability to set a specific CSS ID for the first wrapping cell
Example: container-wrapper
```

```
TABLE_WRAPPER_CELL_CSS_ID
Type: string
Purpose: Ability to set a specific CSS ID for the container table
Example: main-cell
```

```
TABLE_CONTAINER_CELL_CSS_ID
Type: string
Purpose: Ability to set a specific CSS ID for the container cell
Example: container-cell
```

```
TABLE_CONTAINER_CELL_BG_COLOR
Type: string
Purpose Set a background colour for the container table cell
Example: #ffffff
```

```
TABLE_CONTAINER_FIXED_WIDTH (default: true)
Type: boolean
Purpose: Boolean to define if the email width should be fixed or not
```

```
TABLE_CONTAINER_WIDTH (default: 600)
Type: integer
Purpose: Set the width of the container table
```

```
TABLE_WRAPPER_CELL_ALIGN
Type: string
Purpose: Set the align method of wrapper table cell
Example: center
```

```
TABLE_CONTAINER_ALIGN
Type: string
Purpose: Set the align method of container table
Example: center
```

```
TABLE_CONTAINER_CELL_ALIGN
Type: string
Purpose: Set the align method of container table cell
Example: left
```

```
ENABLE_GMAIL_ANDROID_RESIZE_FIX (default: true)
Type: boolean
Purpose: Boolean to include a spacer image the same size as TABLE_CONTAINER_WIDTH to prevent Gmail force scaling a wider email
```

```
ENABLE_GMAIL_IOS_FONT_FIX (default: true)
Type: boolean
Purpose: Boolean to include special <div> to prevent Gmail iOS app auto scaling fonts on wider emails
```

#### HTML Samples

```
ENABLE_HTML_SAMPLE_ANCHORS (default: false)
Type: boolean
Purpose: Boolean to include an anchor HTML example for email usage
```

```
ENABLE_HTML_SAMPLE_IMAGES (default: false)
Type: boolean
Purpose: Boolean to include an image HTML example for email usage
```

```
ENABLE_HTML_SAMPLE_FLOATED_COLUMNS (default: false)
Type: boolean
Purpose: Boolean to include a column layout for email usage
```

```
ENABLE_HTML_SAMPLE_ALIGN_BLOCK_ELEMENT (default: false)
Type: boolean
Purpose: Boolean to include an block element align example for email usage
```

```
ENABLE_HTML_SAMPLE_FAUX_LISTS (default: false)
Type: boolean
Purpose: Boolean to include a list layout using tables example for email uage
```

### Misc

```
PLACEHOLDER_IMG_URL
Type: string
Purpose: Variable to store URL path to placeholder images
Example: http://placehold.it
```
