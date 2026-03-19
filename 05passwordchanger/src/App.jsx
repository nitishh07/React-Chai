import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(characterAllowed){
      str += "!@#$%^&*()-+";
    }
    for(let i=0; i<length; i++){
      let idx = Math.floor(Math.random() * str.length);
      pass += str[idx];
    }
    setPassword(pass);
  }
  ,[length, numberAllowed , characterAllowed , setPassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-sm text-white text-center '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-gray-600 text-white placeholder:text-gray-100' placeholder='Generated Password'></input>
        <button>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" name="" id="" min={6} max={100} value={length} className='cursor-pointer'></input>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
