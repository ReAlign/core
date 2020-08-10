import typeOf from './../../src/utils/typeOf';

test('typeOf(4)', () => {
  expect(typeOf(4)).toBe('number');
})