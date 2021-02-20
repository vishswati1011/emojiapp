import React, { useState } from 'react';
import Data from './Data';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Search =()=>{

    const [name,setName]=useState("");
    const [emoji,setEmoji]=useState("");
    const onChange=(e)=>{
        setName(e.target.value);
      };
      const onSubmit =(e) =>{
        setEmoji(name);
        e.preventDefault();  
      }
    return(
        <div>
            <form >
                <label>Enter Emoji Name</label><br/>
                <input type="text" onChange={onChange}/><br/>
                <br/> <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
            <div>
                {emoji!=""?
                <Data emoji={emoji}/>    
                :null }
            </div>
        </div>
    );

};
export default Search; 