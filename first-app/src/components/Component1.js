import React from "react";//This is optional in function based components
import Developer from "./Developer";
function Component1(){
    return (
        <div className="Component1">
        <h1>A Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, alias ea. Exercitationem sint veniam sunt laborum eligendi earum neque vitae maxime. Accusantium earum cum ipsam porro magni rem iste odit.</p>
        <Developer />
        </div>
    )
}
export default Component1