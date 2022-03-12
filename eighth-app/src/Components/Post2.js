import React, { useState,useEffect } from "react";
import {Card,Button,Spinner} from "react-bootstrap"
import "./Posts.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Posts(){
    const [post,setPost] = useState('')

    const {id}=useParams()

    useEffect(()=>{
        const fetchPost = async ()=>{
            
        try{
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(res.data)
        }catch(err){
            setPost({})
            console.log(err)
        }
    }
    fetchPost()
    },[id])

    return(
        <>
        <div className="back-link">
<Link className="route-link" to="/">Back</Link></div>
          
        {post ? (
        Object.keys(post).length ? (
            <>
            <h1>Post no. {post.id}</h1>  
        <Card className="mypost" border="primary" bg="dark" text="light" key={post.id}>
        <Card.Header>User {post.userId}</Card.Header>
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
        {post.body}
    </Card.Text>
    <Button variant="primary" className="post-buttons">Like</Button>
    <Button variant="primary" className="post-buttons">Comment</Button>
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">Uploaded {Math.floor(Math.random()*60)} mins ago</small>
    </Card.Footer>
</Card>
</>
 
) : (
<h1>This post does not exist</h1>
)
) :(
<Spinner animation="border" />
)}
        </>
    )
}

export default Posts