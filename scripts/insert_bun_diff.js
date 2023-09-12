const cp = require('child_process');

cp.execSync('git config diff.lockb.textconv bun');
cp.execSync('git config diff.lockb.binary true');

console.log('\x1b[32mBun diff configured.');
