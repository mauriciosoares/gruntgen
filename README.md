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
  gruntgen uglify jshint
```

This will install the Uglify and JSHint task into the folder you are, and also save those tasks on your _devDependencies_ in your package.json.

After running this command a file named \_Gruntfile.js will be created. Remove the "\_" to use the file. It's created with a underscore because everytime you run this command it will replace everything inside the \_Gruntfile.js file.

## Parameters

You can install all oficial plugins from GruntJS

- jshint
- watch
- uglify
- clean
- copy
- concat
- cssmin
- connect
- less
- imagemin
- htmlmin
- compass
- coffee
- requirejs
- sass
- compress
- csslint
- jasmine
- nodeunit
- qunit
- jst
- jade
- handlebars
- stylus
- yuidoc
- symlink