import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Mediator from "./components/Pages/Mediator";
// import database from './data/db.json'

function App() {
const [search, setSearch] = useState("");


// const apikey = "f2d5648de8239352b1f3507fe1d97a3c";



  return (
    <div className="App">
      <Router>
        <Navbar search={search} setSearch={setSearch} />
    
        <Routes>
  
          <Route path="/" element={<Navigate to = "/home"/>}/>
          <Route 
          path="/home" 
          element={<Mediator
          search={search}
          category="general"/>}/>

          <Route 
          path="/about" 
          element={<About />} />
           <Route 
           path="/buisness" 
           element={<Mediator 
           search={search} 
           category="buisness"/>}/>

          <Route 
          path="/sport" 
          element={<Mediator 
          search={search} 
          category="sport"/>}/>

          <Route 
          path="/health" 
          element={<Mediator 
          search={search}    
          category="health"/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
