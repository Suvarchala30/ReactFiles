import React, { useState,useEffect } from "react";
import {Card,Button,Spinner} from "react-bootstrap"
import "./Posts.css"
import axios from 'axios'

function Posts(){
    const [posts,setPosts] = useState([])

    useEffect(async ()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => setPosts(response.data))
        // .catch((reject) => console.log(reject))

        try{
            const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data)
        }catch(err){
            console.log(err)
        }
    },[])

    return(
        <>
        {posts.length ? 
            posts.map((post) => (
                
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

            )) 
            : <Spinner animation="border" />
}
        </>
    )
}

export default Posts