global.fetch = require('node-fetch');
import get from './../../../src/net/fetch/get';

test('get resolve', async () => {
    const expectResult = 'https://getjsonip.com/#plus';

    let data = await get('https://jsonip.com/');
    expect(data['geo-ip']).toBe(expectResult);
});