# Usage

The default configuration of the email boilerplate should provide a common basis for most email campaigns, however if you want to customise any of the configuration you need to modify the configuration variables within a file called `.boilerplate.custom`. 

There is a default configuration file called `.boilerplate.defaults`, this is always loaded first to make sure all configuration variables are loaded with a default value to prevent any build errors e.g. if a new variable is added and your `.boilerplate.custom` file doesn't have it.

Your `.boilerplate.custom` file is ignored by Git so you don't need to worry about any of your changes being overwritten on any updates to the source. Ensure you keep an eye on any changes made to this documentation for new configuration variables/modified behaviour. Tweak the `.boilerplate.custom` file to your needs and build the email boilerplate with `gulp` with your customisations.

## Configuration variables

The full list of configuration variables that can be used with the email boilerplate can be found in the table below.

<table width="100%">
	<tr>
		<th valign="middle">
			<sub>
				Option
			</sub>
		</th>
		<th valign="middle">
			<sub>
				Type
			</sub>
		</th>
		<th valign="middle" width="20%">
			<sub>
				Value
			</sub>
		</th>
		<th valign="middle">
			<sub>
				Purpose
			</sub>
		</th>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>General boilerplate settings</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				GITHUB_REPO_URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string</sub>
			</td>
		<td align="left" valign="middle">
			<sub>
				URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Full URL of the project hosted on GitHub, used for generating latest git commit URL
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GUIDELINES_VERSION_HEADER
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Build email boilerplate guidelines version with the "pretty" document header
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GENERATOR_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a generator meta tag with the project name
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Main Document</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				DOCTYPE_VERSION
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				xhtml1_1 <br />
				xhtml1_0-transitional (default)<br />
				xhtml1_0-strict<br /> 
				html4-transitional<br />
				html4-strict<br />
				html5
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Build email boilerplate with a specific doctype. If this configuration option is blank or uses a non-existent value, no doctype will be used
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				LANGUAGE_CODE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				en
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Sets lang attribute value on root HTML tag. If the value is blank, the lang attribute will be removed from the root &lt;html&gt; tag entirely.
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_VML_NAMESPACES
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include VML namespaces on root HTML tag (needed for MSO specific code like VML)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				CHARSET
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				utf-8
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Sets desired character set for the document
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				DOCUMENT_TITLE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Central College Nottingham
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific title value for the HTML document
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_FORMAT_DETECTION_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to stop devices automatically converting data like phone numbers and addresses into ineteractive links
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				FORMAT_DETECTION_META_VALUE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				telephone=no
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Provide data types to be ignored
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_VIEWPORT_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include the viewport meta tag
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				VIEWPORT_META_VALUE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				width=device-width
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific viewport value
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_XUA_COMPATIBLE_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a XUA-Compatible meta tag for Internet Explorer based clients
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				XUA_COMPATIBLE_VALUE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				IE=edge
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Force a document mode for Internet Explorer based clients to use
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_ROBOTS_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true <br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a meta robots tag
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ROBOTS_META_VALUE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				noindex, nofollow
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Provide a value for the meta robots tags
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_APPLE_DISABLE_MESSAGE_FORMATTING_META_TAG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true <br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific meta tag that will prevent iOS/Apple Mail from auto formatting email messages (iOS 10)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_FAVICON
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Define a favicon reference which is used by some email clients/web version
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				FAVICON_URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Absolute URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Full http(s):// URL path to ico file
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Microsoft Office (MSO) code</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MSO_DPI_SCALING_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include MSO specific code that normalises PPI (DPI) on images
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MSO_CONDITIONAL_STYLING
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include specific MSO CSS reset rules
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MSO_LIST_CSS_RESET
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include specific MSO CSS rule to fix the alignment of &lt;li&gt; items
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_VML_CSS_OBJECTS_STYLING
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include specific CSS rules for VML objects when using specific techniques
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MSO_FALLBACK_FONT
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific CSS block that targets main layout elements
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				MSO_DEFAULT_FALLBACK_FONT_STACK
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Helvetica, Arial, sans-serif
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a web safe font stack Windows based Outlook clients will use when using web fonts
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Main CSS Reset</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_RESET_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include the CSS reset style block
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GENERAL_SIBLING_SELECTOR_BUG_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Fix CSS sibling selector support in certain Android/iOS clients
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_OUTLOOK_WEBMAIL_RESET_CSS (Deprecated)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include specific CSS to reset line-height and email body container width in Outlook.com webmail
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				DEFAULT_ANCHOR_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#e6057f
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a global general anchor colour
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_OUTLOOK_MAIL_ANCHOR_STYLING
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to override the default anchor styling in Outlook Mail (Windows 10)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				DEFAULT_ANCHOR_VISITED_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#ff0000
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a global visited anchor colour
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_VISITED_ANCHOR_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include CSS to target visited links (not all clients support this styling)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_IMG_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default) <br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include the display property on the img selector CSS rule to make all images block elements
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_PARAGRAPH_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include CSS to reset the paragraph selector
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HEADER_SELECTORS_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include CSS rules that targets h1 - h6 tags
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				HEADER_SELECTORS_CSS_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#000000
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set the default colour of header tags (&lt;h1&gt; - &lt;h6&gt;)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				HEADER_SELECTORS_ANCHOR_CSS_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#0000FF
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set the default colour of &lt;a&gt; tags within headers tags (&lt;h1&gt; - &lt;h6&gt;)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				HEADER_SELECTORS_ANCHOR_ACTIVE_CSS_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#FF0000
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set the default colour of active &lt;a&gt; within headers tags (&lt;h1&gt; - &lt;h6&gt;)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				HEADER_SELECTORS_ANCHOR_VISITED_CSS_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#800080
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set the default colour of visited &lt;a&gt; within header tags (&lt;h1&gt; - &lt;h6&gt;)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_YAHOO_SHORTCUTS_CSS (Deprecated)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include CSS rules that target automatically converted links in Yahoo! Mail (shortcuts)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				YAHOO_SHORTCUTS_CSS_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#000000
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set the colour of Yahoo shortcuts
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				CUSTOM_APPLE_LINKS_COLOUR1
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#666666
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to create an additional .appleLinksCustom1 class with a custom colour
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				CUSTOM_APPLE_LINKS_COLOUR2
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#999999
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to create an additional .appleLinksCustom2 class with a custom colour
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				CUSTOM_APPLE_LINKS_COLOUR3
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#222222
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to create an additional .appleLinksCustom3 class with a custom colour
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>CSS3 media queries</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MEDIA_QUERY_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to enable the media query style block
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_WINDOWS_PHONE_VIEWPORT_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific at-rule to adjust the viewport on Windows Phone devices
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				WINDOWS_PHONE_VIEWPORT_WIDTH
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				device-width
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to define a specific viewport value for Windows Phone devices
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MEDIA_SCREEN_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media screen query, useful for include webfonts with @font-face or import
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MEDIA_PRINT_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media print query, useful for optimising an email template for printing
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_YAHOO_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific yahoo media query that will be rendered in Yahoo! webmail
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_IE_10_11_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific IE 10/11 media query that targets both desktop and mobile
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_WEBKIT_DETECTION_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific webkit query that will be used on any Webkit client
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GECKO_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific media query that targets Gecko based clients
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_IPAD_3_4_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that matches the iPad 3/4
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_IPAD_1_2_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that matches the iPad 1/2
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MAX_DEVICE_WIDTH_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that is triggered on TABLE_CONTAINER_WIDTH
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_RETINA_3X_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that targets devices with a pixel density of 3x the standard
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_RETINA_2X_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that targets devices with a pixel density of 2x the standard
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_RETINA_1X_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that targets devices with a pixel density slighty higher than normal
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_IOS10_MEDIA_QUERY
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a media query that targets iOS 10 devices
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Misc/Other CSS</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_MISC_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include the misc/other CSS style block
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_AOL_WEBMAIL_CSS_CLASS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific CSS class that will be rendered by AOL Webmail clients
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_OFFICE_365_CSS_SELECTOR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific CSS selector that will target Office 365
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_HIDE_DOWNLOAD_ICON
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific CSS selector that will remove the download icon on Gmail
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_WEBMAIL_TARGETING_SELECTOR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific CSS selector that will target Gmail webmail clients
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_ANDROID_4_4_CENTRE_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include an attribute selector that normalises the margin on Android 4.4
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_CSS_DEBUG_MODE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a special set of CSS rules that will highlight elements allowing further analysis of layout elements
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Main body</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				BODY_CSS_CLASS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				body
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Set a specific class on the &lt;body&gt; tag for advanced CSS targeting techniques
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				BODY_MSO_LINE_HEIGHT_FIX
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true <br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Adds a specific MSO CSS property to the &lt;body&rt; tag to normalise line-height values
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_DOTMAILER_EASY_EDITOR_TEMPLATE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a specific HTML comment that is parsed by the dotmailer Easy Editor templating system
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HIDDEN_PREHEADER
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a &lt;div&gt; following the &lt;body&gt; tag for the preheader
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				PREHEADER_TEXT
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Example preheader text
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to provide a small sentence that will be the first text email clients will use in message/notification previews
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				PREHEADER_CHARACTER_PADDING
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				integer
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				10
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				A numeric value to control how many &amp;nbsp; entities are included after the preheader content in PREHEADER_TEXT to act as character padding
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				BODY_BG_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#ffffff
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific hexidecimal colour for the background of the email
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_BODY_IMG_BG
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Allows for a full width body background to be applied to the wrapper table. When this setting is enabled BODY_BG_COLOUR is ignored
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				BODY_BG_IMG_URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				http://i.imgur.com/YJOX1PC.png
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Absolute URL to where the background image is hosted
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				BODY_BG_FALLBACK_COLOUR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#7bceeb
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Background colour used for the fallback, when the background image doesn't load/is not supported.
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_WRAPPER_CSS_ID
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				main-wrapper
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific CSS ID for the first wrapping table
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_CSS_ID
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				container-wrapper
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific CSS ID for the first wrapping cell
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_WRAPPER_CELL_CSS_ID
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				main-cell
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific CSS ID for the container table
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_CELL_CSS_ID
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				container-cell
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Ability to set a specific CSS ID for the container cell
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_CELL_BG_COLOR
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				#ffffff
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Set a background colour for the container table cell
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_TABLE_CONTAINER
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to control if a container table is created following the wrapper table
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_FIXED_WIDTH
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to define if the email width should be fixed or not
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_WIDTH
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				integer
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				600
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Set the width of the container table in pixels (px)
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_WRAPPER_CELL_ALIGN
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				center
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Set the align method of wrapper table cell
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				TABLE_CONTAINER_ALIGN
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				center
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Set the align method of container table
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_ANDROID_RESIZE_FIX (Deprecated)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a spacer image the same size as TABLE_CONTAINER_WIDTH to prevent Gmail force scaling a wider email
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_IOS_FONT_FIX (Deprecated)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true<br />
				false (default)
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include special divider block to prevent Gmail iOS app auto scaling fonts on wider emails
			</sub>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
			<sub>
				<strong>Other/Misc</strong>
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				PLACEHOLDER_IMG_URL
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				string
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				http://placehold.it
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Base URL path of where placeholder images are stored
			</sub>
		</td>
	</tr>
</table>

### Deprecation Notes

Several configuration options may be marked as "(Deprecated)", this is often due to email client specific changes that affect how the configuration option works since it was originally developed.

<table width="100%">
	<tr>
		<th valign="middle">
			<sub>
				Option
			</sub>
		</th>
		<th valign="middle">
			<sub>
				Deprecation note
			</sub>
		</th>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_OUTLOOK_WEBMAIL_RESET_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				<a href="https://www.emailonacid.com/blog/article/industry-news/outlook.com-accounts-begin-migration-to-office-365-interface" target="_blank">Outlook.com is being migrated over to the Office 365 platform</a>, the majority of Microsoft Accounts i.e. @live, @msn @hotmail, @outlook etc. should have already been migrated over, but there may still be a portion of the user base still present on the older Outlook.com platform. The purpose of this configuration variable was to reset the wrapping &lt;div&gt; element of the email body and normalise a crazy default line-height value via two CSS classes .ExternalClass and .ReadMsgBody. However, this reset will no longer be required once the older Outlook.com platform is retired completely. For now, the reset code remains enabled by default, but will likely be removed in the near future.
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_YAHOO_SHORTCUTS_CSS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Yahoo! Mail no longer highlights certain keywords in email campaigns, therefore there is no requirement to reset any .yshortcuts classes as they are no longer used.
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_ANDROID_RESIZE_FIX
			</sub>
		</td>
		<td rowspan="2">
			<sub>
				Gmail is now <a href="https://gsuite-developers.googleblog.com/2016/09/your-emails-optimized-for-every-screen-with-responsive-design.html" target="_blank">starting to support CSS3</a>, in addition the force scaling and font resizing quirks that these configuration options override on the Android and iOS Gmail apps <a href="https://www.emailonacid.com/blog/article/industry-news/gmail-update-embedded-styles-and-media-queries" target="_blank">are being removed from the client itself</a>, so these options should be considered legacy. Currently not all Gmail clients are rendering with CSS3 support due to a phased rollout.
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_GMAIL_IOS_FONT_FIX
			</sub>
		</td>
	</tr>
</table>

### HTML Samples

The email boilerplate also contains samples of common techniques used in email campaigns. These samples are included on the guidelines version of the boilerplate only.

<table width="100%">
	<tr>
		<th valign="middle">
			<sub>
				Option
			</sub>
		</th>
		<th valign="middle">
			<sub>
				Type
			</sub>
		</th>
		<th valign="middle" width="20%">
			<sub>
				Value
			</sub>
		</th>
		<th valign="middle">
			<sub>
				Purpose
			</sub>
		</th>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_ANCHORS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include an anchor HTML example for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_CTA_BUTTONS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a sample of CTA buttons for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_IMAGES
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include an image HTML example for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_FLOATED_COLUMNS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a column layout for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_ALIGN_BLOCK_ELEMENT
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include an block element align example for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_FAUX_LISTS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a list layout using tables for email usage
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_HORIZONTAL_SPACER
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a horizontal spacer example using a table cell with line-height and height
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_OUTLOOK_PAGE_BREAKS
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a table example that shows how to avoid automatic page breaks in Outlook 2007+
			</sub>
		</td>
	</tr>
	<tr>
		<td align="left" valign="middle">
			<sub>
				ENABLE_HTML_SAMPLE_OUTLOOK_TABLE_CSS_INHERITANCE
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				boolean
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				true (default)<br />
				false
			</sub>
		</td>
		<td align="left" valign="middle">
			<sub>
				Boolean to include a table example that shows how to avoid CSS inheritance issues with table cells in Outlook 2007+
			</sub>
		</td>
	</tr>
</table>
