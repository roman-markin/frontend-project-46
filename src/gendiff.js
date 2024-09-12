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

const gendiff = (obj1, obj2) => {
  const diff = makeDiff(obj1, obj2);
  const indent = ' ';
  const sign = {
    deleted: '-',
    added: '+',
  };
  const lines = Object.keys(diff).reduce((acc, key) => {
    switch (diff[key]) {
      case 'deleted':
        acc.push(`${indent} ${sign.deleted} ${key}: ${obj1[key]}`);
        break;
      case 'added':
        acc.push(`${indent} ${sign.added} ${key}: ${obj2[key]}`);
        break;
      case 'changed': {
        const deleted = `${indent} ${sign.deleted} ${key}: ${obj1[key]}`;
        const added = `${indent} ${sign.added} ${key}: ${obj2[key]}`;
        acc.push(deleted, added);
        break;
      }
      default:
        acc.push(`${indent.repeat(3)} ${key}: ${obj1[key]}`);
    }
    return acc;
  }, []);
  return ['{', ...lines, '}'].join('\n');
};

export default gendiff;
