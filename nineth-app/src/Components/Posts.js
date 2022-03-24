import React, { useEffect } from "react";
import {Card,Button,Spinner} from "react-bootstrap"
import "./Posts.css"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import {fetchPosts} from "../redux/actions"

function Posts(props){
    useEffect(()=>{
        props.fetchPosts()
    },[])
    return(
        <>
<div className="back-link">
<Link className="route-link" to="/">Back</Link></div>
<h1>Posts</h1>

        {!props.loading ? (
            props.posts.map((post) => (
                
        <Card className="mypost" border="primary" bg="dark" text="light" key={post.id}>

        <Card.Header>User {post.userId}</Card.Header>
  <Card.Body>
  <Card.Title><Link className="router-link" to={`/post2/${post.id}`}>{post.title}</Link></Card.Title>
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

            )) )
            : <Spinner animation="border" /> 
}
        </>
    )
}


const mapStateToProps = (state)=>{
    return{
        posts:state.posts.posts,
        error:state.posts.error,
        loading:state.posts.loading
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        fetchPost:()=>dispatch(fetchPosts()),
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)