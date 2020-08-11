import isString from './../../src/utils/isString';

const v1 = 'str';

test(`isString(${v1})`, () => {
  expect(isString(v1)).toBe(true);
});

const v2 = 1;

test(`isString(${v2})`, () => {
  expect(isString(v2)).toBe(false);
})