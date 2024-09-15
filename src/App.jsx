import { useState } from 'react'
import CodeEditor from './CodeEditor'
import useLocalStorage from './useLocalStorage'
import './App.css'

function App() {
const [html,sethtml]= useLocalStorage('html','')
const [css,setcss]=useLocalStorage('css','')
const [js,setjs]= useLocalStorage('js','')


const srcCode=
`
<html>
<body>
${html}</body>
<script>${js}</script>
<style>${css}</style>
</html>
`
  return (
    <>
    <div className="UpperPane">
      <CodeEditor 
      className='CodeEditor'
      value={html}
      onChange={sethtml}
      displayName='HTML'
      language='html'/>
      <CodeEditor
       value={css}
       onChange={setcss}
       displayName='CSS'
       language='css'/>
      <CodeEditor
      value={js}
      onChange={setjs}
      displayName='JS'
      language='js'/>
    </div> 
    <div className="LowerPane">
      <iframe 
      title='Output of the code Editor'
      srcDoc={srcCode}
      sandbox='allow-scripts'
      width='100%'
      height='100%'/>
    </div> 
      
    </>
  )
}

export default App
