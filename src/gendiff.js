import _ from 'lodash';

const makeDiff = (obj1, obj2) => {
  const keys = _.sortBy(Object.keys({ ...obj1, ...obj2 }));
  return keys.reduce((acc, key) => {
    const diff = acc;
    if (!Object.hasOwn(obj1, key)) {
      diff[key] = 'added';
    } else if (!Object.hasOwn(obj2, key)) {
      diff[key] = 'deleted';
    } else {
      diff[key] = obj1[key] === obj2[key] ? 'unchanged' : 'changed';
    }
    return diff;
  }, {});
};

const stringify = (key, value, sign, spacesCount = 1) => {
  const indent = ' '.repeat(spacesCount);
  return `${indent} ${sign} ${key}: ${value}`;
};

const genDiff = (obj1, obj2) => {
  const diff = makeDiff(obj1, obj2);
  const sign = ['-', '+', ''];
  const lines = Object.keys(diff).reduce((acc, key) => {
    switch (diff[key]) {
      case 'deleted':
        acc.push(stringify(key, obj1[key], sign[0]));
        break;
      case 'added':
        acc.push(stringify(key, obj2[key], sign[1]));
        break;
      case 'changed': {
        const deleted = stringify(key, obj1[key], sign[0]);
        const added = stringify(key, obj2[key], sign[1]);
        acc.push(deleted, added);
        break;
      }
      default:
        acc.push(stringify(key, obj1[key], sign[2], 2));
    }
    return acc;
  }, []);
  return ['{', ...lines, '}'].join('\n');
};

export default genDiff;
