const redux = require('redux')//import redux like this only
const { createStore }=redux

//Action type constant
const INCREMENT_COUNTER='INCREMENT_COUNTER'
const DECREMENT_COUNTER='DECREMENT_COUNTER'


//Action
// {
//     type: INCREMENT_COUNTER
// }

// {
//     type: DECREMENT_COUNTER
// }

//Action creator
const incrementCount=()=>{
    return {type: INCREMENT_COUNTER}
}

const decrementCount=()=>{
    return {type: DECREMENT_COUNTER}
}

//INITIAL STATE
const initialState={
    count:0
}

const reducerFunction = (state=initialState,action) =>{
    switch(action.type){
        case 'INCREMENT_COUNTER' : 
        return{
            ...state,
            count:state.count+1
        }
//break keyword is optional here and paranthesis also optional
        case 'DECREMENT_COUNTER':
            return{
                ...state,
                count:state.count-1
            }
        default: return state
    }
}


//Store
const store=createStore(reducerFunction)
//getState() => status of the current state is returned
console.log(store.getState())


const unsubscribe=store.subscribe(()=>{})

store.dispatch(
    incrementCount()
)
console.log(store.getState())

store.dispatch(
    {
        type: INCREMENT_COUNTER
    }
)

store.dispatch(
    {
        type: INCREMENT_COUNTER
    }
)

store.dispatch(
    {
        type: DECREMENT_COUNTER
    }
)

store.dispatch(
    incrementCount()
)

store.dispatch(
    decrementCount()
)
console.log(store.getState())

unsubscribe()