const exec = require('child_process').exec;

const run = command => {
  exec(command, (error, stdout, stderr) => {
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const space = process.argv[2];
const token = process.argv[3];
const build = process.argv[4];

if (!space) {
  console.log('exec error: contentful space ID missing');
} else if (!token) {
  console.log('exec error: contentful token missing');
} else {
  console.log('creating gridsome config...');
  run(
    `cat gridsome.config.example.js | sed s/%space%/${space}/g | sed s/%token%/${token}/g > gridsome.config.js`
  );
  console.log('gridsome config created');

  if (build) {
    console.log('starting build...');
    run(`npm run build`);
  }
}
