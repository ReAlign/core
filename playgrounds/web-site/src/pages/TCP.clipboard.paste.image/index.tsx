import * as React from 'react'

import TCRenderHTML from '@/components/TCRenderHTML'
import htmlCode from './code.html'

export default () => {
  return (
    <TCRenderHTML htmlTpl={htmlCode} />
  )
}
