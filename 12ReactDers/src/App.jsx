import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Sayac from './components/Sayac'
import EventYakala from './components/EventYakala'
import ParentComponent from "./components/ParentComponent";
import KosulluGoster from './components/KosulluGoster'
import IsimListele from './components/IsimListele'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  let karsila = " karsiladim seni"
  /*  <IsimListele /> */
  return (
      <>
       <div>
        <Form />
       
        <KosulluGoster />
        <ParentComponent />
        <EventYakala />
        <Sayac isim="omer" yas="40"/>
        <Header isim="Memo" yas="30"/>
        <Welcome  />
        <Welcome />
        <h1>Merhaba Dunya {karsila}</h1>
       </div>
      </>
   
  )
}

export default App
