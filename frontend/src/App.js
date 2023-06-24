import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import About from "./pages/about";
// import Home from "./pages/home";
import Layout from "./components/layout"
import Views from "./components/views";
import Home from "./pages/home";
//import Card from "./components/card"


function App(){
  return (<>
  { <BrowserRouter><Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
      <Route path="about" element={<Views />}/>
    </Route>
    </Routes></BrowserRouter>
     }
     
    
    </>)
}


export default App;

//<Route index element={<Views />} />