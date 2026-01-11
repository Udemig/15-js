import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainSection from './components/MainSection'
import RefsDemo from './components/RefsDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RefsDemo />
      
    </>
  )
}

/* 
<Header />
 <MainSection />

*/

export default App
