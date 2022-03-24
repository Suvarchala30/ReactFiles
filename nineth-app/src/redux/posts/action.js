import axios from "axios"
export const FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE= 'FETCH_POSTS_FAILURE'

export const fetchPostsRequested = ()=>{
    return{
        type: FETCH_POSTS_REQUESTED
    }
}

export const fetchPostsSucess = (posts)=>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload:posts
    }
}

export const fetchPostsfailure = (error)=>{
    return{
        type:FETCH_POSTS_FAILURE,
        payload:error
    }
}

export const fetchPosts = () =>{
    return async (dispatch) =>{
        try{
            dispatch(fetchPostsRequested())
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(fetchPostsSucess(res.data))
        }catch(err){
            dispatch(fetchPostsfailure(err.message))
        }
    }
}