# Weather Data

This application was built using Angular 1.5.11. There is no need to run a server. Just drag the index file in a browser (Firefox is highly recommended) and the app should be able to run by itself.

The index file already includes dependencies such as Bootstrap and JQuery.

This is also using Protractor for end-to-end tests and Karma for unit tests.

* More information about current version of Angular [Angular](https://angular.io/).
* Version 3.X of Bootstrap [Bootstrap](https://getbootstrap.com/).
* Version 2.X of JQuery [JQuery](https://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released//).
* Testing Angular code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* End-to-end Angular code using [Protractor](https://angular.github.io/protractor/).

### Quick start

```
# Just drag the index.html file into the browser

```

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Testing](#testing)
* [Frequently asked questions](#faq)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* Bootstrap 3.X and JQuery 2.X (CDN links included in index.html file)
* Firefox (Use version [50.0.3](https://www.mozilla.org))
* Ensure you're running Node (`v6.x.x`+) and NPM (`3.x.x`+) for installig and running Automated Unit Tests.

## Software Architecture

#### This application was built having in mind:

* Easy to Maintain.
* Reusable and clean code.
* Easy to scale.

#### Based on that the code was organized:

* `components` (aka modules or sections) have their on folder inside the `app` folder.
* Each `component` have its own template/view, css, Controler (JS) and Tests in its own folder.
* Each route for each of the `components` should be declared in the `app.js` config.
* CSS and JS files should be properly declared in the `index.html` file.

This focus on `components` make it easier to debug and maintain in the long term. Also, each new section should have the same characteristics, so the application can scale easily.

#### Additionally:

* Reusable `components` should be included in the `shared` folder inside the `app` folder. 
* The `shared` folder contains `factories`, `services` and `directives` that can be reused in the app.

## Testing

#### 1. Unit Tests

* single run: `npm test`

#### 2. End-to-End Tests (aka. e2e, integration)

* Setup:
  * Install Protractor globally: `npm install -g protractor`
  * Update Webdriver Manager: `webdriver-manager update`
  * Run Webdriver Manager: `webdriver-manager start`

* Running a test:
  * Make sure Webdriver is running.
  * in a new tab: `protractor protractor-conf.js`

# FAQ

#### Do I need to add script / link tags into index.html ?

No, this repo already has all its dependencies (For running the app and for the tests).

#### How to include new sections ?

First, duplicate the `home` component in the app folder. Second, change the names of the files. Third, in the index file include the css and js files.

# License

[MIT](/LICENSE)
