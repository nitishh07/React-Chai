import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (

<div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2'>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={()=> setColor("red")}>Red </button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={()=> setColor("blue")}>Blue </button>
      <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={()=> setColor("green")}>Green </button>
    </div>
</div>
  )
}

export default App
