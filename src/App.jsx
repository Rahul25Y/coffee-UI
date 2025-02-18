import { useEffect, useState } from 'react'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';

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
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <NavBar/>
        <Home/>
        <Services/>
        <Banner/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
