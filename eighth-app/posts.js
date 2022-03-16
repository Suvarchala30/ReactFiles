const redux = require('redux')//import redux like this only
const { createStore }=redux

const ADD_POSTS='ADD_POSTS'

const addPosts=(postName)=>{
    return {type:ADD_POSTS,payload:postName}
}

const initialState={
    posts:[],
}

const reducerFunction = (state=initialState,action) =>{
    switch(action.type){
        case ADD_POSTS : 
        return{
            ...state,
            posts:[...state.posts,action.payload]
        }
        
        default: return state
    }
}


const store=createStore(reducerFunction)


const unsubscribe=store.subscribe(()=>{})
console.log(store.getState())
store.dispatch(addPosts('New post'))
console.log(store.getState())
store.dispatch(addPosts('Suvarchala'))
store.dispatch(addPosts('Travel Diaries'))
console.log(store.getState())
unsubscribe()