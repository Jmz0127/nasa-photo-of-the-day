import React, { useState, useEffect } from "react"; //added usestate and useeffect hooks
import "./App.css";
import axios from 'axios'; //added axios since we need that to make a API request
import Pic from './components/Pic' //components need to be capitalized


function App() {

const [spaceData, setSpaceData] = useState([])
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=1nRJGHrgqQlJMuOlo2RTk8ZnMmFs1NkX35J5ZKhK&date=2020-04-20') //used key
  .then(res => {
    // console.log(res.data); 
    setSpaceData(res.data);
    
  })
  .catch(err => {
    console.error(err);
  })
}, [])

console.log(spaceData); //making sure state is set


  return (
    <div className="App">
      <Pic data = {spaceData}/>
    </div>
  );
}

export default App;
