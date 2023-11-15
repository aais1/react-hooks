import { useState ,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [noAllow,setnoAllow] = useState(false)
  const [charAllow,setcharAllow] = useState(false)
  const [pass,setPass] = useState("");

  const passGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(noAllow) str+="123456789";
    if(charAllow) str+="@#$%^&*()/<{:.~"

    for(let i=0;i<length;i++){
      pass+=str[Math.floor((Math.random()*str.length))];
    }
    setPass(pass);
  },[length,noAllow,charAllow,setPass]);

  useEffect(()=>{
    passGenerator();
  },[length,noAllow,charAllow,])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md p-8 my-8 bg-gray-700 text-orange-500 rounded-xl'>
        <h2 className=' text-white text-center'>Password Generator</h2>
       <div className='flex shadow rounder-lg overflow-hidden mb-4 my-2'>
        <input 
        type="text"
        value={pass}
        className='outline-none w-full py-1 px-3 rounded-tl-md rounded-bl-md'
        placeholder='Password'
        readOnly
        />  
        <button className='outline-none bg-blue-700 text-white px-3 py-0.6 shrink-0 rounded-tr-md rounded-br-md'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
          <label>Length :{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox"
          value={charAllow}
          className='cursor-pointer'
          onClick={()=>{charAllow?setcharAllow(false):setcharAllow(true)}}
           />
          <label>Characters</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox"
          value={noAllow}
          className='cursor-pointer'
          onClick={()=>{noAllow?setnoAllow(false):setnoAllow(true)}}
           />
          <label>Numbers</label>
        </div>
       </div>
      </div>
    </>
  )
  
  }

export default App
