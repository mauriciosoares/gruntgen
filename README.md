# gruntgen

`gruntgen` is used to make it easy for you to setup _Grunt_ tasks, and generating a simple Gruntfile with those tasks.

## Installing

First of all, you need [http://nodejs.org/](NodeJS) installed.

Install _gruntgen_ globally using _npm_.

```
  npm install -g gruntgen
```

## First steps

To use _gruntgen_ is simple, just run it and chose which task you want to install.

```
  gruntgen grunt-contrib-uglify grunt-contrib-jshint
```

This will install the Uglify and JSHint task into the folder you are, and also save those tasks on your _devDependencies_ in your package.json.

After running this command a file named \_Gruntfile.js will be created. Remove the "\_" to use the file. It's created with a underscore because everytime you run this command it will replace everything inside the \_Gruntfile.js file.

## Parameters

- grunt-contrib-jshint
- grunt-contrib-watch
- grunt-contrib-uglify
- grunt-contrib-clean
- grunt-contrib-copy
- grunt-contrib-concat
- grunt-contrib-cssmin
- grunt-contrib-connect
- grunt-contrib-less
- grunt-contrib-imagemin
- grunt-contrib-htmlmin
- grunt-contrib-compass
- grunt-contrib-coffee
- grunt-contrib-requirejs
- grunt-contrib-sass
- grunt-contrib-compress
- grunt-contrib-csslint
- grunt-contrib-jasmine
- grunt-contrib-nodeunit
- grunt-contrib-qunit
- grunt-contrib-jst
- grunt-contrib-jade
- grunt-contrib-handlebars
- grunt-contrib-stylus
- grunt-contrib-yuidoc
- grunt-contrib-symlink

## Note:

If you miss some task in here, feel free to fork the project and add a new task, or even your own task...

Remembering that it must be registered on NPM.

## Release History

 * 2014-12-21   v0.1.0   Support for non official Grunt tasks.

## License
Beerware
