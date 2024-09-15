import {useState} from 'react'
import { Editor } from '@monaco-editor/react';
export default function CodeEditor(props) {
  const{
    displayName,value,language,onChange
  }= props
  const handleChange=(value)=>{
    onChange(value)
    console.log(value)
  }
  const[open,setOpen]= useState(true)
  return (
    <div className={`editor ${open?"":"collapse"}`}>
      <div className="header">
        <div>{displayName}</div>
        <button className='editorButton' onClick={()=>{setOpen(prev=>!prev,console.log("closed"))}}>o/c</button>
      </div>
      <Editor
      /* height='290px'
      width='420px' */
      
      value={value}
      language={language}
      onChange={handleChange}
      theme='vs-dark'
      options={{
        automaticLayout:true,
        lineNumbers:'on',
        scrollBeyondLastLine:false,

      }}
      />
    </div>
  )
}
