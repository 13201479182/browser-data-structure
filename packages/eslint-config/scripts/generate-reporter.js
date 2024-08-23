const { exec } = require('child_process');

exec(`pnpm -w exec eslint . -f html -o ./docs/eslint代码报告.html`, (error, stdout, stderr) => {});
