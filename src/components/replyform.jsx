import React, { useState } from "react";
import Axios from 'axios';


function Reply(props) {
  const [note, setNote] = useState({
    name: "",
    reply: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    
    // setNote({
    //   name: "",
    //   reply: ""
    // });
    //event.preventDefault();
    Axios.post('http://localhost:3001/api/insertReply', {name: note.name, reply:note.reply,
  })
  }

  return (
    <div>
      <form className="form reply">

        
        <input
          name="name"
          onChange={handleChange}
          value={note.name}
          placeholder="Name"
          required
        />
        <textarea
          name="reply"
          onChange={handleChange}
          value={note.reply}
          placeholder="Reply"
          rows= '10'
          required
        />
        <button type="submit" id="zoom" onClick={submitNote}>Submit</button>
        
      </form>
    </div>
  );
}

export default Reply;
