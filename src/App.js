import React, { useState, useEffect } from "react"; //added usestate and useeffect hooks
import "./App.css";
import axios from 'axios'; //added axios since we need that to make a API request


export default function App() {

const [space, setSpace] = useState([])
useEffect(() => {
  axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=1987-07-01&end_date=1987-07-07&api_key=1nRJGHrgqQlJMuOlo2RTk8ZnMmFs1NkX35J5ZKhK') //used key
  .then(res => {
    setSpace(res);
  })
  .catch(err => {
    console.error(err);
  })
}, [])







  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

// export default App;
