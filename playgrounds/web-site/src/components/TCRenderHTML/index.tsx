import * as React from 'react'
import Highlight from 'react-highlight'

import 'highlight.js/styles/github.css'
import './index.scss'

import { renderMacro, cleanMacro } from './macro'

const TCRenderHTML = ({ htmlTpl }) => {
  const ID_PREFIX = `j-render-html-${Date.now()}-${Math.floor(Math.random() * 100_000)}-`
  const ID_RENDER = `${ID_PREFIX}render`

  React.useEffect(() => {
    if (htmlTpl) {
      const DOM_RENDER = document.querySelector(`#${ID_RENDER}`)
      if (DOM_RENDER) {
        DOM_RENDER.append(document.createRange().createContextualFragment(renderMacro(htmlTpl)))
      }
    }
  }, [])
  return (
    <div className="tc-render-html-container">
      <div
        id={ID_RENDER}
        className="tc-render-html-preview-container"
      />
      <div className="tc-render-html-code-container">
        <Highlight className="html">
          {cleanMacro(htmlTpl)}
        </Highlight>
      </div>
    </div>
  )
}

export default TCRenderHTML
