const redux = require('redux')//import redux like this only
const { createStore }=redux

const ADD_POSTS='ADD_POSTS'

const addPosts=()=>{
    return {type:ADD_POSTS}
}

const initialState={
    posts:[],
}

const reducerFunction = (state=initialState,action) =>{
    switch(action.type){
        case ADD_POSTS : 
        return{
            ...state,
            posts:[...state.posts,'New Post']
        }
        
        default: return state
    }
}


const store=createStore(reducerFunction)


const unsubscribe=store.subscribe(()=>{})
console.log(store.getState())
store.dispatch(addPosts())
console.log(store.getState())
store.dispatch(addPosts())
store.dispatch(addPosts())
console.log(store.getState())
unsubscribe()