import isObject from './../../src/utils/isObject';

const v1 = { x: 'x' };

test(`isObject(${v1})`, () => {
  expect(isObject(v1)).toBe(true);
});

const v2 = [1];

test(`isObject(${v2})`, () => {
  expect(isObject(v2)).toBe(false);
})