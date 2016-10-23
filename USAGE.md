# Usage

The default configuration of the email boilerplate should provide a common basis for most email campaigns, however if you want to customise any of the configuration you need to modify the configuration variables within a file called `.boilerplate.custom`. 

There is a default configuration file called `.boilerplate.defaults`, this is always loaded first to make sure all configuration variables are loaded with a default value to prevent any build errors e.g. if a new variable is added and your `.boilerplate.custom` file doesn't have it.

Your `.boilerplate.custom` file is ignored by Git so you don't need to worry about any of your changes being overwritten on any updates to the source. Ensure you keep an eye on any changes made to this documentation for new configuration variables/modified behaviour. Tweak the `.boilerplate.custom` file to your needs and build the email boilerplate with `gulp` with your customisations.

## Configuration variables

The full list of configuration variables that can be used with the email boilerplate can be found in the table below.

<table width="100%">
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th width="15%">Value</th>
		<th>Purpose</th>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Main Document</strong>
		</td>
	</tr>
	<tr>
		<td>DOCTYPE_VERSION</td>
		<td>string</td>
		<td>
			xhtml-transitional (default)<br />
			xhtml-strict<br /> 
			html4<br />
			html5</td>
		<td>Build email boilerplate with a specific doctype</td>
	</tr>
	<tr>
		<td>LANGUAGE_CODE</td>
		<td>string</td>
		<td>en</td>
		<td>Sets lang attribute value on root HTML tag</td>
	</tr>
	<tr>
		<td>ENABLE_VML_NAMESPACES </td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include VML namespaces on root HTML tag (needed for MSO specific code like VML)</td>
	</tr>
	<tr>
		<td>CHARSET</td>
		<td>string</td>
		<td>utf-8</td>
		<td>Sets desired character set for the document</td>
	</tr>
	<tr>
		<td>DOCUMENT_TITLE</td>
		<td>string</td>
		<td>Central College Nottingham</td>
		<td>Ability to set a specific title value for the HTML document</td>
	</tr>
	<tr>
		<td>ENABLE_FORMAT_DETECTION_META_TAG</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to stop devices automatically converting data like phone numbers and addresses into ineteractive links</td>
	</tr>
	<tr>
		<td>FORMAT_DETECTION_META_VALUE</td>
		<td>string</td>
		<td>telephone=no</td>
		<td>Provide data types to be ignored</td>
	</tr>
	<tr>
		<td>ENABLE_VIEWPORT_META_TAG</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include the viewport meta tag</td>
	</tr>
	<tr>
		<td>VIEWPORT_META_VALUE</td>
		<td>string</td>
		<td>width=device-width</td>
		<td>Ability to set a specific viewport value</td>
	</tr>
	<tr>
		<td>ENABLE_XUA_COMPATIBLE_META_TAG</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a XUA-Compatible meta tag for Internet Explorer based clients</td>
	</tr>
	<tr>
		<td>XUA_COMPATIBLE_VALUE</td>
		<td>string</td>
		<td>IE=edge</td>
		<td>Force a document mode for Internet Explorer based clients to use</td>
	</tr>
	<tr>
		<td>ENABLE_ROBOTS_META_TAG</td>
		<td>boolean</td>
		<td>true <br />
			false (default)
		</td>
		<td>Boolean to include a meta robots tag</td>
	</tr>
	<tr>
		<td>ROBOTS_META_VALUE</td>
		<td>string</td>
		<td>noindex, nofollow</td>
		<td>Provide a value for the meta robots tags</td>
	</tr>
	<tr>
		<td>ENABLE_APPLE_DISABLE_MESSAGE_FORMATTING_META_TAG</td>
		<td>boolean</td>
		<td>true <br />
			false (default)
		</td>
		<td>Boolean to include a specific meta tag that will prevent iOS/Apple Mail from auto formatting email messages (iOS 10)</td>
	</tr>
	<tr>
		<td>ENABLE_FAVICON</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Define a favicon reference which is used by some email clients/web version</td>
	</tr>
	<tr>
		<td>FAVICON_URL</td>
		<td>string</td>
		<td>Absolute URL</td>
		<td>Full http(s):// URL path to ico file</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Microsoft Office (MSO) code</strong>
		</td>
	</tr>
	<tr>
		<td>ENABLE_MSO_DPI_SCALING_FIX</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include MSO specific code that normalises PPI (DPI) on images</td>
	</tr>
	<tr>
		<td>ENABLE_MSO_CONDITIONAL_STYLING</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include specific MSO CSS reset rules</td>
	</tr>
	<tr>
		<td>ENABLE_VML_CSS_OBJECTS_STYLING</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include specific CSS rules for VML objects when using specific techniques</td>
	</tr>
	<tr>
		<td>ENABLE_MSO_FALLBACK_FONT</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a specific CSS block that targets main layout elements</td>
	</tr>
	<tr>
		<td>MSO_DEFAULT_FALLBACK_FONT_STACK</td>
		<td>string</td>
		<td>Helvetica, Arial, sans-serif</td>
		<td>Ability to set a web safe font stack Windows based Outlook clients will use when using web fonts</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Main CSS Reset</strong>
		</td>
	</tr>
	<tr>
		<td>ENABLE_GENERAL_SIBLING_SELECTOR_BUG_FIX</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Fix CSS sibling selector support in certain Android/iOS clients</td>
	</tr>
	<tr>
		<td>DEFAULT_ANCHOR_COLOUR</td>
		<td>string</td>
		<td>#e6057f</td>
		<td>Ability to set a global general anchor colour</td>
	</tr>
	<tr>
		<td>ENABLE_OUTLOOK_MAIL_ANCHOR_STYLING</td>
		<td>boolean</td>
		<td>true<br />
			false (default)
		</td>
		<td>Ability to override the default anchor styling in Outlook Mail (Windows 10)</td>
	</tr>
	<tr>
		<td>DEFAULT_ANCHOR_VISITED_COLOUR</td>
		<td>string</td>
		<td>#ff0000</td>
		<td>Ability to set a global visited anchor colour</td>
	</tr>
	<tr>
		<td>ENABLE_VISITED_ANCHOR_CSS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include CSS to target visited links (not all clients support this styling)</td>
	</tr>
	<tr>
		<td>ENABLE_HEADER_SELECTORS_CSS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include CSS rules that targets h1 - h6 tags</td>
	</tr>
	<tr>
		<td>ENABLE_YAHOO_SHORTCUTS_CSS_CLASSES</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include CSS rules that target automatically converted links in Yahoo! (shortcuts)</td>
	</tr>
	<tr>
		<td>CUSTOM_APPLE_LINKS_COLOUR1</td>
		<td>string</td>
		<td>#666666</td>
		<td>Ability to create an additional .appleLinksCustom1 class with a custom colour</td>
	</tr>
	<tr>
		<td>CUSTOM_APPLE_LINKS_COLOUR2</td>
		<td>string</td>
		<td>#999999</td>
		<td>Ability to create an additional .appleLinksCustom2 class with a custom colour</td>
	</tr>
	<tr>
		<td>CUSTOM_APPLE_LINKS_COLOUR3</td>
		<td>string</td>
		<td>#222222</td>
		<td>Ability to create an additional .appleLinksCustom3 class with a custom colour</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>CSS3 media queries</strong>
		</td>
	</tr>
	<tr>
		<td>ENABLE_WINDOWS_PHONE_VIEWPORT_FIX</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific at-rule to adjust the viewport on Windows Phone devices</td>
	</tr>
	<tr>
		<td>ENABLE_MEDIA_SCREEN_QUERY</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a media screen query, useful for include webfonts with @font-face or import</td>
	</tr>
	<tr>
		<td>ENABLE_YAHOO_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific yahoo media query that will be rendered in Yahoo! webmail</td>
	</tr>
	<tr>
		<td>ENABLE_IE_10_11_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific IE 10/11 media query that targets both desktop and mobile</td>
	</tr>
	<tr>
		<td>ENABLE_WEBKIT_DETECTION_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific webkit query that will be used on any Webkit client</td>
	</tr>
	<tr>
		<td>ENABLE_GECKO_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific media query that targets Gecko based clients</td>
	</tr>
	<tr>
		<td>ENABLE_MAX_DEVICE_WIDTH_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a media query that is triggered on TABLE_CONTAINER_WIDTH</td>
	</tr>
	<tr>
		<td>ENABLE_RETINA_3X_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a media query that targets devices with a pixel density of 3x the standard</td>
	</tr>
	<tr>
		<td>ENABLE_RETINA_2X_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a media query that targets devices with a pixel density of 2x the standard</td>
	</tr>
	<tr>
		<td>ENABLE_RETINA_1X_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a media query that targets devices with a pixel density slighty higher than normal</td>
	</tr>
	<tr>
		<td>ENABLE_IOS10_MEDIA_QUERY</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a media query that targets iOS 10 devices</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Misc/Other CSS</strong>
		</td>
	</tr>
	<tr>
		<td>ENABLE_AOL_WEBMAIL_CSS_CLASS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific CSS class that will be rendered by AOL Webmail clients</td>
	</tr>
	<tr>
		<td>ENABLE_OFFICE_365_CSS_SELECTOR</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific CSS selector that will target Office 365</td>
	</tr>
	<tr>
		<td>ENABLE_GMAIL_HIDE_DOWNLOAD_ICON</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a specific CSS selector that will remove the download icon on Gmail</td>
	</tr>
	<tr>
		<td>ENABLE_ANDROID_4_4_CENTRE_FIX</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include an attribute selector that normalises the margin on Android 4.4</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Main body</strong>
		</td>
	</tr>
	<tr>
		<td>ENABLE_DOTMAILER_EASY_EDITOR_TEMPLATE</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a specific HTML comment that is parsed by the dotmailer Easy Editor templating system</td>
	</tr>
	<tr>
		<td>ENABLE_PREHEADER</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to include a &lt;div&gt; following the &lt;body&gt; tag for the preheader</td>
	</tr>
	<tr>
		<td>PREHEADER_TEXT</td>
		<td>string</td>
		<td>Example Preheader text</td>
		<td>Ability to provide a small sentence that will be the first text email clients will use in message/notification previews</td>
	</tr>
	<tr>
		<td>BODY_BG_COLOUR</td>
		<td>string</td>
		<td>#ffffff</td>
		<td>Ability to set a specific hexidecimal colour for the background of the email</td>
	</tr>
	<tr>
		<td>TABLE_WRAPPER_CSS_ID</td>
		<td>string</td>
		<td>main-wrapper</td>
		<td>Ability to set a specific CSS ID for the first wrapping table</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_CSS_ID</td>
		<td>string</td>
		<td>container-wrapper</td>
		<td>Ability to set a specific CSS ID for the first wrapping cell</td>
	</tr>
	<tr>
		<td>TABLE_WRAPPER_CELL_CSS_ID</td>
		<td>string</td>
		<td>main-cell</td>
		<td>Ability to set a specific CSS ID for the container table</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_CELL_CSS_ID</td>
		<td>string</td>
		<td>container-cell</td>
		<td>Ability to set a specific CSS ID for the container cell</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_CELL_BG_COLOR</td>
		<td>string</td>
		<td>#ffffff</td>
		<td>Set a background colour for the container table cell</td>
	</tr>
	<tr>
		<td>ENABLE_TABLE_CONTAINER</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to control if a container table is created following the wrapper table</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_FIXED_WIDTH</td>
		<td>boolean</td>
		<td>
			true (default)<br />
			false
		</td>
		<td>Boolean to define if the email width should be fixed or not</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_WIDTH</td>
		<td>integer</td>
		<td>600</td>
		<td>Set the width of the container table in pixels (px)</td>
	</tr>
	<tr>
		<td>TABLE_WRAPPER_CELL_ALIGN</td>
		<td>string</td>
		<td>center</td>
		<td>Set the align method of wrapper table cell</td>
	</tr>
	<tr>
		<td>TABLE_CONTAINER_ALIGN</td>
		<td>string</td>
		<td>center</td>
		<td>Set the align method of container table</td>
	</tr>
	<tr>
		<td>ENABLE_GMAIL_ANDROID_RESIZE_FIX (Deprecated)</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a spacer image the same size as TABLE_CONTAINER_WIDTH to prevent Gmail force scaling a wider email</td>
	</tr>
	<tr>
		<td>ENABLE_GMAIL_IOS_FONT_FIX (Deprecated)</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include special divider block to prevent Gmail iOS app auto scaling fonts on wider emails</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<strong>Other/Misc</strong>
		</td>
	</tr>
	<tr>
		<td>PLACEHOLDER_IMG_URL</td>
		<td>string</td>
		<td>Absolute URL</td>
		<td>Base URL path of where placeholder images are stored</td>
	</tr>
</table>

### HTML Samples

The email boilerplate also contains samples of common elements/techniques used in email campaigns. By default all of these examples are not included in the boilerplate, but they are intended to be used for gudiance and learning by generating live code examples of areas mentioned in the guidelines version of the boilerplate.

<table width="100%">
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th width="15%">Value</th>
		<th>Purpose</th>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_ANCHORS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include an anchor HTML example for email usage</td>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_CTA_BUTTONS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a sample of CTA buttons for email usage</td>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_IMAGES</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include an image HTML example for email usage</td>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_FLOATED_COLUMNS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a column layout for email usage</td>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_ALIGN_BLOCK_ELEMENT</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include an block element align example for email usage</td>
	</tr>
	<tr>
		<td>ENABLE_HTML_SAMPLE_FAUX_LISTS</td>
		<td>boolean</td>
		<td>
			true<br />
			false (default)
		</td>
		<td>Boolean to include a list layout using tables example for email uage</td>
	</tr>
</table>
