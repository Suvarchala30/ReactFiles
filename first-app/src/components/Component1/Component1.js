import React from "react"; //This is optional in function based components
import Developer from "./Developer/Developer";
import "./Component1.css";
function Component1(props) {
  return (
    <div className="Component1">
      <h1 style={{ backgroundColor: "black", color: "white" }}>A Heading {props.heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, alias ea.
        Exercitationem sint veniam sunt laborum eligendi earum neque vitae
        maxime.. Accusantium earum cum ipsam porro magni rem iste odit.
      </p>
      <Developer />
    </div>
  );
}
export default Component1;
