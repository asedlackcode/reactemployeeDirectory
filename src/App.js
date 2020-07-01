import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import API from "./utils/API";
import './App.css';
import Nav from "./components/Nav"



function App() {
  const [apiResponse, setApiResponse] = useState([])

  useEffect(()=> {
    API.getUsers().then((response) => {
      setApiResponse(response.data.results);
    })
    
    
  }, [])

  return (
     <div>
       <Nav/>
       {apiResponse.map(item => {
         return(
           <div>
             <li>{item.name.first}</li>
             </div>
         )
       })}
     </div>
  );
}

export default App;
