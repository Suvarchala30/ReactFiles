//action type constants
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
//const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER='DECREMENT_COUNTER'

//action creator
export const incrementCounter=(countInput=1)=>{
    return{
        type: INCREMENT_COUNTER,payload: countInput
    }
}
//countInput = 1 is a default value
export const decrementCounter = (countInput=1)=>{
    return{
        type: DECREMENT_COUNTER,payload:countInput
    }
}