let exec = require('child_process').exec;
const execSync = require('child_process').execSync; //同步子进程

function pullCode(){
  exec('git pull', function(err, stdout, stderr){
    if(err){
      console.log(err);
      pullCode();
    }
    console.log(stdout, stderr)
  })
}

pullCode();
