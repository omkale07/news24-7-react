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



const apikey = process.env.REACT_APP_API_KEY;


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
          apiKey={apikey}
          category="general"/>}/>

          <Route 
          path="/about" 
          element={<About />} />
           <Route 
           path="/buisness" 
           element={<Mediator 
           search={search} 
           apiKey={apikey} 
           category="business"/>}/>

          <Route 
          path="/sport" 
          element={<Mediator 
          search={search} 
          apiKey={apikey} 
          category="sports"/>}/>

          <Route 
          path="/health" 
          element={<Mediator 
          search={search}    
          apiKey={apikey} 
          category="health"/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
