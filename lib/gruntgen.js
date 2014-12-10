var exec = require('child_process').exec,
  officialGruntTasks = require('./officialTasks').tasks,
  tasksToWrite = [],
  tasks;

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
  if(officialGruntTasks.indexOf(task) === -1) {
    console.log('\033[31m "' + task + '" is not a official Grunt task, won\'t be installed. \033[0m');
    return;
  }

  var taskToExec = 'grunt-contrib-' + task;
  tasksToWrite.push(taskToExec);

  console.log('Installing ' + taskToExec);
  exec('npm install ' + taskToExec + ' --save-dev', function(error, stdout, stderr) {
    console.log(stdout);
  });
});

console.log(tasksToWrite);
