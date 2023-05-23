/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const TinyCore = require('../../dist/tiny-core')

let count = 0

const t = {
  pFn() {
    return new Promise((rs, rj) => {
      setTimeout(() => {
        count++
        console.log('pFn')
        rs(count)
      }, 300)
    })
  },
  check({ res, resolve, reject }) {
    return new Promise((rs) => {
      const flag = res === 3
      console.log('xxx: ', flag, res)
      if (flag) {
        resolve(res)
      }
      rs(!flag)
    })
  },
}

const main = async () => {
  const res = await TinyCore.Async.polling(t.pFn, t.check, { delay: 800 })
  console.log('res::: ', res)
  return null;
}

console.log('--- node demo start ---\n\n')
main().then(() => {
  console.log('\n\n--- node demo end ---')
})