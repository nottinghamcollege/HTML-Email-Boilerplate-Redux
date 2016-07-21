HTML Email Boilerplate Redux
==============================================

A HTML Email Boilerplate is designed to create a solid foundation for any email campaign by fixing various email client quirks from the beginning (saving headaches later!), as well as providing a good starting point for building your own email campaigns/templates.

There are various email boilerplate templates around, however Central College Nottingham has adapted its own email boilerplate template based on a variety of sources as well our own additions based on our own research and development. We regularly review changes in email client behaviour and aim to keep our boilerplate constantly up to date with the latest developments and changes in the email world.

We refer to our email boilerplate as a redux of the [original HTML Email Boilerplate](http://htmlemailboilerplate.com/)

## Main Features:

As well as creating a solid foundation for any email campaign, our boilerplate also focuses on the following areas:

* Customisation of an email boilerplate that suits your needs
* Forcing the document mode for Internet Explorer based clients
* CSS3 support in the native mail client on Windows Phone 8 and above (POP3/IMAP)
* Scaling images correctly in Outlook 2010 and 2013 when using DPI scaling factors greater than 96 DPI (100%)
* Improved Windows Phone 7/8/8.1 compatibility
* Improved Office 365 (OWA) compatibility (Microsoft have since improved the rendering standards of OWA [in the October 2014 update](http://blogs.office.com/2014/10/14/improving-outlook-web-app-options-settings-2/))
* Android 4.4 centring fix
* More robust method of stopping iOS data links

As well as fixing other email client quirks that have been discovered.

## Usage:

This project uses `npm` and `gulp` packages to produce a customised and production ready version of the email boilerplate. Originally the project began as static HTML files, however overtime this become a problem where dynamic elements were needed. e.g. toggling code blocks on/off, variable values etc. This has led to using various `gulp` related packages to fill this requirement.

1. Install `npm`
2. Clone the git source of this project and run `npm i` to install the required packages
3. Modify the variables in `gulpfile.js` to your requirements. Mostly booleans or string values.
4. Run `gulp` to build the email boilerplate
5. The email boilerplate will be written to `dist/email-boilerplate-without-guidelines.html`

The email boilerplate itself is split into two versions, experimental and stable. Previously this was managed by creating seperate HTML documents, however since [
1bc2b35](https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/commit/1bc2b35d4e4730eb4aea203f2d8fded1a93ec0d9) this is now done via branches in the Git repo.

### Develop branch (Experimental)

This is the latest/bleeding edge version of the email boilerplate, experimental code that needs testing will appear here first, it provides a branch for testers/curious users to check out the very latest developments of the email boilerplate, but be warned, email client compatibility is not guaranteed on develop because its more of a pre-release branch.

**It is strongly recommended that you NEVER use the develop version of the email boilerplate in a live email campaign. The develop version may not have been tested thoroughly and hence its cross email client compatibility is not guaranteed. Always use the master branch!**

### Master branch (Stable)

This is the stable version of the boilerplate which should be used in email campaigns. It is also the default branch.

### Guidelines

Two versions of the email boilerplate exist, one version is static full of HTML/CSS comments that details every aspect of the code, the other is a preprocess version which has all of the HTML/CSS comments removed, but contains variables and conditional logic ready to be built with `gulp`.

In order to maintain accessibility of the project, the guidelines version is provided outside of any `npm` control allowing you to view the full email boilerplate and documentation without having to install anything if you do not wish to use `npm`.

**Never use the "with guidelines" version in a live email campaign, as HTML/CSS comments play havoc with spam filters and even cause emails to appear blank in a few clients! You will also be adding unnecessary bloat to your HTML as well!**

## License:

The MIT License (MIT)

Copyright (c) 2014 - 2016 Central College Nottingham

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Credits:

This boilerplate is originally based on two very popular boilerplates by:

* Sean Powell - https://github.com/seanpowell/Email-Boilerplate
* Email on Acid - http://www.emailonacid.com/blog/details/C13/html_boilerplate

Further additions and adaptations have been made Central College Nottingham either from our own research or cited from sources. Where sources have been cited in the guidelines version of the stable boilerplate, credit is given to the original author of the referenced information.
