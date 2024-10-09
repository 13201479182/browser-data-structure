const { exec } = require('child_process');

exec(`pnpm -w exec eslint . -f html -o ./coverage/eslint.html`, (error, stdout, stderr) => {});
