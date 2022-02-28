import React,{Component} from "react";
import "./CollegeStudents.css"
import developerImage from "../images/coder-image.jpeg"

class CollegeStudents extends Component{
    constructor(props){
        super(props)
        this.state={
            students:[{
                id:1,
                name: 'Suvarchala',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 11'

            },
            {
                id:2,
                name: 'Niharika',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 12'

            },
            {
                id:3,
                name: 'Suvarchala',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 11'

            },
            {
                id:4,
                name: 'Suvarchala',
                bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, minima!',
                course:'Full stack web dev',
                techStack:'MERN',
                batch:'Batch 11'

            }
            ]
        }
    }
    render(){
        const {students}=this.state
        return(
            <div>
                { students.map((student,index) => 
            <div className="student-data"  key={index}>
                
                <h1>{student.name}</h1>
                <p>{student.bio}</p>
                <h3>Course: {student.course}</h3>
                <h3>TechStack: {student.techStack}</h3>
                <h3>Batch: {student.batch}</h3>
                
            </div>
            
            )}
    <img src={developerImage} alt="DeveloperImage" />
            </div>
        )
    }
}
export default CollegeStudents