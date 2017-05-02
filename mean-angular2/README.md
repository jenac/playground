# MeanAngular2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
## Prepare
```
npm install -g angular-cli mocha istanbul
```

## Create project
```
ng new mean-angular2
```

## Create server folders
```
server.js
server/routes/api.js
server/routes/api.spec.js
...
```

## Code structure
* angular2 build to **dist** folder
* server.js serving dist folder as static content.


# For Angular 2
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages
Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# For node server

## Run node server
```
node server.js
```
Navigate to http://localhost:3000

## Run unit test
```
npm run server-test
```

## Run test coverage
```
npm run server-test-coverage
```

# Build both
```
ng build && node server.js
```
Navigate to http://localhost:3000
Navigate to http://localhost:3000/api

## Build docker for release
```
ng build -prod && docker-compose build
```

## unit test on server using mocha, chai, sinon
```
npm install mocha chai sinon-chai --save-dev
```
create test folder and common.js, mocha.opts in side the folder

to watch uni test:
```
mocha -w
```
