import {useState} from 'react'

export default function useLocalStorage(key,initialValue) {
    const[storedValue,setStoredValue]= useState(()=>{
        const storedItem= localStorage.getItem(key)
        if(storedItem!==null){
            return JSON.parse(storedItem)
        } else{
            return initialValue;
        }
    })
    const UpdateValue=(value)=>{
        setStoredValue(value)
     localStorage.setItem(key,JSON.stringify(value))
    }
  return (
   [storedValue,UpdateValue]
  )
}
