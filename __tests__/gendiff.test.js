import genDiff from '../src/gendiff.js';

describe('comparing flat object', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const obj2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  test('diff obj1 to obj2', () => {
    const actual = genDiff(obj1, obj2);
    const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
    expect(actual).toEqual(expected);
  });

  test('diff obj2 to obj1', () => {
    const actual = genDiff(obj2, obj1);
    const expected = `{
  + follow: false
    host: hexlet.io
  + proxy: 123.234.53.22
  - timeout: 20
  + timeout: 50
  - verbose: true
}`;
    expect(actual).toEqual(expected);
  });
  test('not have diff', () => {
    const actual = genDiff(obj2, obj2);
    const expected = `{
    host: hexlet.io
    timeout: 20
    verbose: true
}`;
    expect(actual).toEqual(expected);
  });
});
