import React, { useState,useEffect } from "react";
import {Card,Button,Spinner} from "react-bootstrap"
import "./Posts.css"
import axios from 'axios'

function Posts(){
    // const posts=[
    //     {
    //         "userId": 1,
    //         "id": 1,
    //         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    //       },
    //       {
    //         "userId": 1,
    //         "id": 2,
    //         "title": "qui est esse",
    //         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    //       },
    //       {
    //         "userId": 1,
    //         "id": 3,
    //         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    //       },
    //       {
    //         "userId": 1,
    //         "id": 4,
    //         "title": "eum et est occaecati",
    //         "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    //       }
    // ]
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