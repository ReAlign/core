import lightObject2RequestString from '../../utils/lightObject2RequestString';
import fetcher from './fetcher';
export default function get(url = '', data = {}) {
    return fetcher(`${url}?${lightObject2RequestString(data)}`);
}
;
//# sourceMappingURL=get.js.map