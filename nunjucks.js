const nunjucks = require('nunjucks');
const StringHelper = require('./helpers/string');


const env = nunjucks.configure('views', {
  autoescape: false,
  trimBlocks: true,
  lstripBlocks: true,
});
env.addFilter('pascal_case', (str) => StringHelper.capitalizeHead(str));
env.addFilter('csharp_type', (type) => {
  if (type === 'integer') {
    return 'int?';
  }
  if (type === 'integer[]') {
    return 'int?[]';
  }
  if (type === 'number') {
    return 'double?';
  }
  if (type === 'number[]') {
    return 'double?[]';
  }
  return type;
});
env.addFilter('csharp_name', (name) => {
  if (name === 'operator') {
    return `@${name}`;
  }
  return name;
});


module.exports = env;
