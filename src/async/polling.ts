/**
 * polling
 * @param {Promise} pollingPromiseFn
 * @param {Promise<Boolean>} needContinuePromiseFn ({ res, resolve, reject }) => Promise<Boolean>
 * @param {*} param2 { delay }
 * @returns {Promise<Object>}
 */
export default function polling(pollingPromiseFn, needContinuePromiseFn, { delay } = { delay: 1000 }) {
  const pollingPro = (resolve, reject) => {
    pollingPromiseFn()
      .then(pRes => needContinuePromiseFn({ res: pRes, resolve, reject }))
      .then(flag => flag && setTimeout(pollingPro, delay, resolve, reject))
      .catch(reject)
  }

  return new Promise(pollingPro)
}