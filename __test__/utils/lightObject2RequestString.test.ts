import lightObject2RequestString from './../../src/utils/lightObject2RequestString';

const v1 = {
  a: 'x=?yu',
  b: 1
};
const v1_r = 'a=x%3D%3Fyu&b=1';

test(`lightObject2KVArray(${v1})`, () => {
  expect(lightObject2RequestString(v1)).toEqual(v1_r);
});
