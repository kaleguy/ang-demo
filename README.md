# Angular + FullCalendar Demo

[Live Demo Site](https://safe-retreat-49267.herokuapp.com/)

This is a test project for displaying event data in FullCalendar via an Angular (1.5) app. It is based
on the HotTowel starter app.


**Forked from HotTowel Angular**

To install the original Hot Towel project, see Hottowel on yeoman. The original project contains
documentation about various aspects of the code. This version just adds the FullCalendar control
with a few enhancements.

The files added for calendar functionality are all ES6 files, with an .es6 extension. 
The corresponding .js files are compiled files (using babel-cli).


## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

```bash
npm install -g bower gulp nodemon
```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)


### Running the project
 - Install npm modules with `npm install`
 - Install bower modules with `bower install`
 - Run the project with `npm start`

### Linting
 - Run jslint on the compiled .js files with `gulp vet`
 - Run JSCS on the .es6 files with `gulp vet_es6`


## License

MIT
