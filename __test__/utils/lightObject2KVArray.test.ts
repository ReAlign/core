import lightObject2KVArray from './../../src/utils/lightObject2KVArray';

const v1 = {
  a: 'x',
  b: 1
};
const v1_r = ['a=x', 'b=1'];

test(`lightObject2KVArray(${v1})`, () => {
  expect(lightObject2KVArray(v1)).toEqual(v1_r);
});
