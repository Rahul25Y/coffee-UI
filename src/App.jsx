import { useEffect, useState } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  },[])
  return (
    <>
      <div>
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App
