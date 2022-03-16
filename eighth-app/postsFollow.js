const redux = require('redux')
const reduxLogger=require('redux-logger')
const { createStore , combineReducers,applyMiddleware}=redux
const { createLogger }=reduxLogger

const ADD_POSTS='ADD_POSTS'
const INCREMENT_FOLLOWER_COUNT = 'INCREMENT_FOLLOWER_COUNT'

const addPosts=(postName)=>{
    return {type:ADD_POSTS,payload:postName}
}

const incremnetFollowerCount=()=>{
    return {type:INCREMENT_FOLLOWER_COUNT}
}

const postinitialState={
    posts:[],
}

const reducerFunction = (state=postinitialState,action) =>{
    switch(action.type){
        case ADD_POSTS : 
        return{
            ...state,
            posts:[...state.posts,action.payload]
        }
        
        default: return state
    }
}

const folowerinitialState={
    followers:0,
}

const followerReducer =(state=folowerinitialState,action) =>{
    switch(action.type){
        case INCREMENT_FOLLOWER_COUNT:
            return{
                ...state,
                followers:state.followers+1
            }
        
        default: return state
    }
}



const rootReducer=combineReducers({
    reducerFunction, //if the key and value is same the directly give it like this insted of reducerFunction:reducerFunction
    followerReducer
})

const store=createStore(rootReducer,applyMiddleware(createLogger()))


const unsubscribe=store.subscribe(()=>{})
//console.log('--------',store.getState())
store.dispatch(addPosts('New post'))
//console.log('--------',store.getState())

store.dispatch(incremnetFollowerCount())
store.dispatch(addPosts('Suvarchala'))
//console.log('--------',store.getState())

store.dispatch(addPosts('Travel Diaries'))
store.dispatch(incremnetFollowerCount())
//console.log('--------',store.getState())
unsubscribe()