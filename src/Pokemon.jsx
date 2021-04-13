import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Pokemon = () => {

   const [num, Setnum] = useState();
   const [name, Setname] = useState();
   const [moves, Setmoves] = useState();


   useEffect(()=>{
     
    async function getData(){

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res.data.name);
        Setname(res.data.name);
        Setmoves(res.data.moves.length);
    }
    getData();
   }
  
   );

    return (
        <div className="container-fluid">
        
        <div  style={{textAlign:'center'}}>    
         <h1>You Choose <span style={{color:'red'}}> {num} </span> Value </h1>
         <h1> My Name is <span style={{color:'red'}}> {name}  </span></h1>
         <h1> I Have <span style={{color:'red'}}> {moves}  Moves  </span> </h1>
        <select value={num} onChange={(event)=>{
            Setnum(event.target.value)
           }}
            >
        <option value="1">1 </option>
        <option value="25">25 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
        <option value="5">5 </option>
        </select>  
        </div>
        </div>
    )
}

export default Pokemon
