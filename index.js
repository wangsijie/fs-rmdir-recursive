var fs = require('fs');
var path = require('path');

module.exports = function(targetPath) {
    if (fs.existsSync(targetPath)) {
        fs.readdirSync(targetPath).forEach(file => {
            var curPath = path.join(targetPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(targetPath);
    }
};
