var fs = require('fs');
var path = require('path');
var deepmerge = require('deepmerge');


var json = {
  read_file: (file) => {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  },
  read_folder: (folder) => {
    return fs.readdirSync(folder)
      .filter((file) =>  path.extname(file) === '.json')
      .map((file) => json.read_file(path.join(folder, file)))
      .reduce((prev, data) => deepmerge(prev, data), {});
  }
}


module.exports = json;