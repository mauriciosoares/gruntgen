var exec = require('child_process').exec,
  fs = require('fs'),
  path = require('path'),
  templatesPath = path.join(path.dirname(fs.realpathSync(__filename)), '/templates/');

function generate() {

  // gets the templates to generate the Gruntfile
  _Gruntfile += fs.readFileSync(templatesPath + '_head', 'utf8');
  _Gruntfile += '  var tasks = ' + JSON.stringify(tasksToSave) + ';\n\n';
  tasksToSave.forEach(function(task) {
    _Gruntfile += fs.readFileSync(templatesPath + 'tasks/_' + task, 'utf8');
  });
  _Gruntfile += fs.readFileSync(templatesPath + '_foot', 'utf8');

  fs.writeFile('_Gruntfile.js', _Gruntfile);
}

var Gruntgen = function() {
  this.registeredTasks = require('./registeredTasks').tasks;
  this._Gruntfile = '';
  this.tasksToSave = [];
  this.tasks;

  this.initialize();
};

Gruntgen.prototype.initialize = function() {
  // it needs at least 1 argument
  if(process.argv.length < 3) {
    console.log('Choose at least 1 task to be installed');
    return false;
  }

  // remove useless parameters
  tasks = process.argv.slice(2);

  console.log('Installing chosen tasks');
  console.log('This may take a few minutes');
  console.log('');

  // checks if the tasks chosen by the user are official tasks
  tasks.forEach(this.fetchTasks.bind(this));

  this.generateGruntfile();
};

Gruntgen.prototype.fetchTasks = function(task, index) {
  if(this.registeredTasks.indexOf(task) === -1) {
    console.log('\033[31m "' + task + '" is not registered yet. \033[0m');
    return;
  }

  this.tasksToSave.push(task);
  console.log('Installing ' + task);
  exec('npm install ' + task + ' --save-dev', this.execCallback);
};

Gruntgen.prototype.execCallback = function(error, stdout, stderr) {
  console.log(stdout);
};

Gruntgen.prototype.generateGruntfile = function() {

};

exports.Gruntgen = Gruntgen;
