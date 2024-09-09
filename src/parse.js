import fs from 'node:fs';
import YAML from 'yaml';
import _ from 'lodash';

const parseJson = (data) => JSON.parse(data);
const parseYml = (data) => YAML.parse(data);

export default (path) => {
  const data = fs.readFileSync(path, 'utf8');
  if (_.endsWith(path, '.json')) {
    return parseJson(data);
  }
  if (_.endsWith(path, '.yml')) {
    return parseYml(data);
  }
  return 'the file format is not supported';
};
