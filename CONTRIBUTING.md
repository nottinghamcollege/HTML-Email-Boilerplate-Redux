# Contributing to this project
 
Any contributions to the HTML Email Boilerplate Redux project are openly encouraged and appreciated. You can contribute in a variety of ways:

* Submitting bug reports
* Suggesting new features or ideas
* Testing the `develop` version of this project.
* Submitting a pull request

## Issue tracker

All bug reports/suggestions (including features) can be submitted to the [issue tracker](https://github.com/centralcollegenottingham/HTML-Email-Boilerplate-Redux/issues) where a project developer will review accordingly. All feedback on any aspect of the project is welcomed.

## Testing the `develop` branch

Its important for the HTML Email Boilerplate Redux project to work across all email clients, this requires a degree of user testing before making it to the `master` release. Any testing done by the community is welcomed to ensure new developments do not cause regressions or break certain email clients.

## Submitting a pull request

[Pull requests](https://help.github.com/articles/using-pull-requests/) can be made to this project to add new features, fix bugs or potential issues or to improve the project overall. You should be aware of the following points when submitting a pull request:

* Any pull request submitted to this project is licensed under the main project license (MIT)
* Any author of a merged pull request can appear in the CONTRIBUTORS.md file as recongisition of your contribution

When submitting a pull request, please follow the following guidelines:

* All configuration variable names should be UPPERCASE and appear as "EXAMPLE_CONFIGURATION_VARIABLE_NAME". If you modify or add new options, the USAGE.md documentation should be kept up to date.
* If any changes to the `gulpfile.js` are made you should ensure `gulp` runs without an errors. CircleCI will run this check for you when submitting a pull request.
