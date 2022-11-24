import React from "react";

function Note(props) {
  
  function handleEvent() {
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEvent}>DELETE</button>
    </div>
  );
}

export default Note;
