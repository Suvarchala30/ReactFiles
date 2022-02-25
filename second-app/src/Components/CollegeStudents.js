import React,{Component} from "react";
import "./CollegeStudents.css"

class CollegeStudents extends Component{
    constructor(props){
        super(props)
        this.state={
            students:[{
                name: 'Suvarchala',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 11'

            },
            {
                name: 'Niharika',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 12'

            }
            ]
        }
    }
    render(){
        const {students}=this.state
        const student1=students[0]
        const student2=students[1]
        return(
            <div>
            <div className="student-data">
                <h1>{student1.name}</h1>
                <p>{student1.bio}</p>
                <h3>{student1.course}</h3>
                <h3>{student1.techStack}</h3>
                <h3>{student1.batch}</h3>
            </div>
            <br />
            <br />
            <div className="student-data">
                <h1>{student2.name}</h1>
                <p>{student2.bio}</p>
                <h3>{student2.course}</h3>
                <h3>{student2.techStack}</h3>
                <h3>{student2.batch}</h3>
            </div>
            </div>
        )
    }
}
export default CollegeStudents