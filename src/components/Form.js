import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const chaneHandle = (e) =>{
    setName(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`The name you entered was: ${name}`);
  }
    return (
        <>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={chaneHandle}
        />
      </label>
      <input type="submit" />
    </form>
      </>
    )
  }

  export default Form;