import React , { Component } from "react";

class HelloClass extends Component{
    constructor(props){
        super(props)
        this.state={
            greetTo:'World',
            greetAlsoTo:'Hyderabad'
        }
       // console.log(this.props)
      }

      changeGreetTo = () =>{
          this.setState({
              greetTo:'India',
              greetAlsoTo:'Vizag'
          })
        console.log('Iam changed greet')
      }
    render(){
       // console.log(this.props)
       const { greetTo,greetAlsoTo } = this.state
    return(
        <div className="HelloClass">
            <h1>Hello { greetTo } and {greetAlsoTo}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi natus laborum eum porro dolore vero, accusamus molestias deleniti architecto dicta necessitatibus eaque accusantium, blanditiis iste omnis illum repudiandae expedita ipsum. Animi, voluptates? Porro quod dolorum sit rem perspiciatis laudantium ratione illo odio tempore? Pariatur optio error perferendis ea excepturi eius.</p>
            <button onClick={this.changeGreetTo}>ChangegreetTo</button>
        </div>
    )
    }
}
export default HelloClass;