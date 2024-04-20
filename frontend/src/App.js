import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
     const [users,setUser]=useState({
      name:'',
      email:""
     });

 useEffect(()=>{
 const fetchData =async()=>{
    const res= await axios.get('/list') 
      console.log(res); 
  }
fetchData();
 },[])

  return (
    <div className="App">
      <label >Name :</label>
         <input value={users.name} onChange={(e)=>setUser({...users,name:e.target.value})}></input><br/>
      <label >Email :</label>
         <input value={users.email} onChange={(e)=>setUser({...users,email:e.target.value})}></input><br/>
         <button type='submit' onClick={(e)=>{

         }}>submit</button>
    </div>
  );
}

export default App;
