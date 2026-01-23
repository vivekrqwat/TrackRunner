import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import LoginConatiner from './Pages/LoginPAge/LoginConatiner'
import HOMEPAGE from './Pages/HOMEPAGE/HOMEPAGE'
import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoginConatiner></LoginConatiner> */}
    {/* <HOMEPAGE></HOMEPAGE> */}
    <Dashboard></Dashboard>
     </>
  )
}

export default App
