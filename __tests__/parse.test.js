import { fileURLToPath } from 'url';
import path from 'path';
import parse from '../src/parse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expected = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

test('parse json file', () => {
  const actual = parse(getFixturePath('file1.json'));
  expect(actual).toEqual(expected);
});

test('parse yml file', () => {
  const actual = parse(getFixturePath('file3.yml'));
  expect(actual).toEqual(expected);
});
