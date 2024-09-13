import fs from 'node:fs';
import path from 'path';
import YAML from 'yaml';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf8');

export const parseJson = (file) => {
  try {
    return JSON.parse(file);
  } catch (e) {
    throw new Error('Invalid JSON');
  }
};

export const parseYml = (file) => {
  try {
    return YAML.parse(file);
  } catch (e) {
    throw new Error('Invalid YML');
  }
};

export const parse = (filepath) => {
  const extention = path.extname(filepath).toLowerCase();
  switch (extention) {
    case '.json':
      return parseJson(readFile(filepath));
    case '.yml':
      return parseYml(readFile(filepath));
    default:
      throw new Error('Unsupported file extension');
  }
};

export default parse;
