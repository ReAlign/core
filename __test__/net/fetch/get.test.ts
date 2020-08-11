import fetchMock from "jest-fetch-mock";

global.fetch = require('node-fetch');
import get from './../../../src/net/fetch/get';

test('get resolve', async () => {
    const expectResult = 'https://getjsonip.com/#plus';

    let data = await get('https://jsonip.com/');
    expect(data['geo-ip']).toBe(expectResult);
});

it("recognizes when a response's status is not okay", () => {
    fetchMock.mockReject(() =>
        get('a.c').then((res: any) => Promise.reject(res.errorToRaise))
    )
});