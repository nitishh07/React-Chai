import './App.css'
import Card from './components/Card'
let myObj = {
  name: "Chai Aur Code",
  age: 1,
  isDeveloper: true
}

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind Test</h1>
    {/* <Card channel="chaiAurCode" myArr={[1, 2, 3]}/>
    <Card channel="chaiAurCode" myObj={myObj} /> */}

    <Card username="Nitish" btnText="Subscribe"/>
    <Card username="Chai Aur Code" btnText="Follow"/>
    </>
  )
}

export default App
