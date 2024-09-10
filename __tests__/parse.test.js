import parse from '../src/parse.js';

const expected = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

test('parse json file', () => {
  const actual = parse('./__fixtures__/file1.json');
  expect(actual).toEqual(expected);
});

test('parse yml file', () => {
  const actual = parse('./__fixtures__/file3.yml');
  expect(actual).toEqual(expected);
});
