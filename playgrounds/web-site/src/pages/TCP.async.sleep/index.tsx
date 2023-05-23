import * as React from 'react'

import TCRenderHTML from '@/components/TCRenderHTML'
import htmlCode from './code.html'

const Homepage = () => {
  return (
    <TCRenderHTML htmlTpl={htmlCode} />
  )
}

export default Homepage
