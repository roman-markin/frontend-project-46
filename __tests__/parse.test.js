import parse from '../src/parse.js';

const expected = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

test('parse json file', () => {
  const actual = parse('./__fixtures__/json_file.json');
  expect(actual).toEqual(expected);
});

test('parse yml file', () => {
  const actual = parse('./__fixtures__/yml_file.yml');
  expect(actual).toEqual(expected);
});
