import htmlMacroRunCode from './html-macro-run-code.html'

export function renderMacro(htmlTpl: string) {
  return htmlTpl
    .replace('<!-- html-macro-run-code -->', htmlMacroRunCode)
}

export function cleanMacro(htmlTpl: string) {
  return htmlTpl
    .replace(`<!-- html-macro-run-code -->
`, '')
}
