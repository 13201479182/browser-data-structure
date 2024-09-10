import { exec } from 'node:child_process';
import { readFile } from 'node:fs';

readFile('./.vscode/extensions.json', 'utf8', (err, data) => {
    if (data) {
        try {
            const { recommendations: plugins } = JSON.parse(data);
            exec('code --list-extensions', (err, stdout, stderr) => {
                if (err) {
                    return console.error(err);
                }
                const installedPlugins = stdout.split('\n').filter((item) => item);
                installPlugins(installedPlugins, plugins);
            });
        } catch (err) {
            console.error(err);
        }
    }
});

function installPlugins(installedPlugins, neededInstallPlugins) {
    let loadedCount = 0,
        loadTotal = neededInstallPlugins.length;
    for (const plugin of neededInstallPlugins) {
        if (installedPlugins.includes(plugin)) {
            console.log(`Download-${++loadedCount}/${loadTotal}: ${plugin} has installed`);
        } else {
            const child = exec(`code --force --install-extension ${plugin}`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`vsix err log: ${err}`);
                } else {
                    console.log(`Download-${++loadedCount}/${loadTotal}: ${plugin} install success`);
                }
                // 结束子进程
                child.kill();
            });
        }
    }
}
