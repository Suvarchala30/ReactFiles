import React from "react";

const Hello=({ greetTo,greet})=>{
    
    
    //const gretAlsoTo=props.greet ? props.greet :'India'
    return(
        <div className="Hello">
            <h1>Hello {greetTo}{greet && ` and   ${greet}`}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi natus laborum eum porro dolore vero, accusamus molestias deleniti architecto dicta necessitatibus eaque accusantium, blanditiis iste omnis illum repudiandae expedita ipsum. Animi, voluptates? Porro quod dolorum sit rem perspiciatis laudantium ratione illo odio tempore? Pariatur optio error perferendis ea excepturi eius.</p>
        </div>
    )
}
export default Hello;