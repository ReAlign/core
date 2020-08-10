import deepTrim from './../../src/utils/deepTrim';

const v1 = '  a ';

test(`deepTrim("${v1}")`, () => {
  expect(deepTrim(v1)).toBe('a');
});

const v2 = {
    x: '  c ',
    y: [
        ' 1  ',
        2,
    ]
};
const v2_tobe = {
    x: 'c',
    y: [
        '1',
        2,
    ]
};

test(`deepTrim("${v2}")`, () => {
  expect(deepTrim(v2)).toEqual(v2_tobe);
});