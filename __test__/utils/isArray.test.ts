import isArray from './../../src/utils/isArray';

const v1 = [1];

test(`isArray(${v1})`, () => {
  expect(isArray(v1)).toBe(true);
});

const v2 = 1;

test(`isArray(${v2})`, () => {
  expect(isArray(v2)).toBe(false);
})