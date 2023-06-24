import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Axios from 'axios';

function CreateArea(props) {
  
const [isExpanded, setExpand] = useState(false);
const [named, setName] = useState('')
const [questioned, setQuestion] = useState('')

function expand(){
    setExpand(true);
}

  function submitQuestion(event) {
    console.log('clicked')
    document.getElementById("zoom").classList.add('zoom');
    //setClick(true)
    if (named==='' || questioned===''){
      alert('Question already exits')
    }
    else{
      Axios.post('http://localhost:3001/api/insert', {name: named, question:questioned,})
    }
    
  }
    

  // setName("")
  // setQuestion("")

  
  
  return (
    <div>
      <form className="form">
        {isExpanded &&
        <input
          name="name"
          type="text"
          required
          onChange={(event) =>{
            setName(event.target.value);
          }}
          placeholder="Name"
        />}
        <textarea
          name="question"
          required
          onClick={expand}
          onChange={(event) =>{
            setQuestion(event.target.value);
          }}
          placeholder="Question"
          rows={isExpanded ? 3 : 1}
        />
        <button type="submit" id="zoom" onClick={submitQuestion}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
