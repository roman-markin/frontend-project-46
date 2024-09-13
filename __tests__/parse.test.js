import { fileURLToPath } from 'url';
import path from 'path';
import { parse, parseJson, parseYml } from '../src/parse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('positive parsing files', () => {
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
});

describe('negative parsing', () => {
  test('parse unsuported file', () => {
    function parseTxt() {
      parse('txtfile.txt');
    }
    expect(parseTxt).toThrow('Unsupported file extension');
  });

  test('file parsing error json', () => {
    function parsInvalidJson() {
      const incorrectJson = '{ "host": "hexlet.io"';
      console.log(parseJson(incorrectJson));
    }
    expect(parsInvalidJson).toThrow('Invalid JSON');
  });

  test('file parsing error yml', () => {
    function parsInvalidJson() {
      const incorrectYml = '{ "host" hexlet.io }';
      console.log(parseYml(incorrectYml));
    }
    expect(parsInvalidJson).toThrow('Invalid YML');
  });
});
