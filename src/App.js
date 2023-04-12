import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';


function App() {

  const [mainNav , setMainNav] = useState("")
  const [logo , setLogo] = useState("logo")
  const [hidden , setHidden] = useState("discription")
  const [movemain , setMvemain] = useState("")

  function NavHandler(){
    if(document.documentElement.scrollTop != 0 ){
      setMainNav("bg-black txt-white");
      setLogo("logo logoChange");   
      setHidden("hidden");
      setMvemain("movemain");  
    }else{
      setMainNav("");
      setLogo("logo");
      setHidden("discription");
      setMvemain("");
    }
  }
  
  window.addEventListener('scroll', NavHandler);
  
  return (
    <div className="App">
      <Navbar mainNav= {mainNav} logo={logo} hidden={hidden}></Navbar>
      <Main movemain={movemain}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;