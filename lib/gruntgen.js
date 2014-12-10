var exec = require('child_process').exec,
  officialGruntTasks = require('./officialTasks').tasks,
  tasks;

// it needs at least 1 argument
if(process.argv.length < 3) {
  console.log('Choose at least 1 task to be installed');
  return false;
}

// remove useless parameters
tasks = process.argv.slice(2);

console.log('Installing chosen tasks');

// checks if the tasks chosen by the user are official tasks
tasks.forEach(function(task) {
  if(officialGruntTasks.indexOf(task) === -1 && officialGruntTasks.indexOf('contrib-' + task) === -1) {
    console.log('"' + task + '" is not a official Grunt task, it\'ll not be installed');
    return;
  }

  exec('npm install grunt-contrib-concat', function(error, stdout, stderr) {
    console.log(stdout);
  });
});
// console.log(tasks);
// console.log(officialGruntTasks);

// exec('npm install grunt-contrib-concat', function(error, stdout, stderr) {
//   console.log(stdout);
// });
