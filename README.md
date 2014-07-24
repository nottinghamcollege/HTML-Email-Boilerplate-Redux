HTML Email Boilerplate Redux
==============================================

A HTML Email Boilerplate is designed to create a solid foundation for any email campaign by fixing various email client quirks from the beginning. (Saving headaches later!)

There are various email boilerplate templates around, however Central College Nottingham has adapted its own template based on a variety of sources as well our own additions based on our own research and development. We regularly review changes in email client behaviour and aim to keep our boilerplate constantly up to date with the latest developments.

## What does our redux version of the HTML email boilerplate include?

As well as creating a solid foundation for any email campaign, our boilerplate also focuses on the following areas:

* Use of the IE Edge meta tag, forcing IE clients to render with highest capable standards
* Enabling CSS3 media query support on Windows Phone 7.5 and above
* DPI fixes with images for HiDPI devices when using Outlook 2007 and above
* Better Windows Phone compatibility

As well as other standardised fixes for a lot of other clients.

## Usage:

Our boilerplate is split into two versions, stable and experimental. There are two variants of the stable boilerplate and one version of the experimental boilerplate.

* [Stable with guidelines](https://raw.githubusercontent.com/centralcollegenottingham/html-email-boilerplate-redux/master/htmlemail-boilerplate-stable-with-guidelines.html) - Commented version for guideline purposes
* [Stable without guidelines](https://raw.githubusercontent.com/centralcollegenottingham/html-email-boilerplate-redux/master/htmlemail-boilerplate-stable-without-guidelines.html) - Version to use in live email campaigns
* [Experimental without guidelines](https://raw.githubusercontent.com/centralcollegenottingham/html-email-boilerplate-redux/master/htmlemail-boilerplate-experimental-without-guidelines.html) - Bleeding edge version to test new developments

### Stable

The two versions of the stable boilerplate are the same, the only difference is one features lots of comments for guideline purposes, while the other version is simply the same document but without any HTML/CSS comments.

**Never use the commented version in a live email campaign, as HTML/CSS comments play havoc with spam filters, also the structure of the commented version is not friendly for parsing!**

### Experimental

The experimental version of the boilerplate is essentially a bleeding edge test ground. As things change in the email campaign world new code needs to be tested, this version provides a perfect base for this, without disrupting the stability and original purpose of the stable boilerplate.

New code for fixing various quirks will appear on the experimental version first and if the code passes our own QA tests, it will eventually makes it way to the stable version. Sometimes if experimental code doesn't pass such tests, it will just be removed entirely and not make it to stable.

## License:

The MIT License (MIT)

Copyright (c) 2014 Central College Nottingham

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

This boilerplate is a hybrid of the two very popular boilerplates by:

* Sean Powell - http://htmlemailboilerplate.com
* Email on Acid - http://www.emailonacid.com/blog/details/C13/html_boilerplate

Further additions and adaptations have been made Central College Nottingham either from our own research or cited from sources. Where sources have been cited in the guidelines version of the stable boilerplate, credit is given to the original author of the referenced information.



