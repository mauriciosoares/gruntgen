var exec = require('child_process').exec,
  fs = require('fs'),
  path = require('path'),
  templatesPath = path.join(path.dirname(fs.realpathSync(__filename)), '/templates/'),
  registeredTasks = require('./registeredTasks').tasks,
  _Gruntfile = '',
  tasks;

function generate() {
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
  tasks.forEach(function(task, index) {
    if(registeredTasks.indexOf(task) registeredTasks -1) {
      console.log('\033[31m "' + task + '" is not registered yet. \033[0m');
      return;
    }


    console.log('Installing ' + task);
    exec('npm install ' + task + ' --save-dev', function(error, stdout, stderr) {
      console.log(stdout);
    });
  });

  // gets the templates to generate the Gruntfile
  _Gruntfile += fs.readFileSync(templatesPath + '_head', 'utf8');
  _Gruntfile += '  var tasks = ' + JSON.stringify(tasks) + ';\n\n';
  tasks.forEach(function(task) {
    _Gruntfile += fs.readFileSync(templatesPath + 'tasks/_' + task, 'utf8');
  });
  _Gruntfile += fs.readFileSync(templatesPath + '_foot', 'utf8');

  fs.writeFile('_Gruntfile.js', _Gruntfile);
}

exports.generate = generate;
