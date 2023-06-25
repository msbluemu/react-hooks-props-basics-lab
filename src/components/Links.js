import React from "react";

function Links(props){
  return (
    <div id="links">
     <h3>Links</h3>
     <a href={props.github} target="_blank">{props.github}</a>
     <a href={props.linkedin} target="_blank">{props.linkedin}</a>
    </div>
  )
}

export default Links;