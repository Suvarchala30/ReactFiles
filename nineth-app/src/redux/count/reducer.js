import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "./action"

const initialState={
    count:0
}

const counterReducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER:// => if we want to use like this we need to import from action.js like in 1st line
        //case 'INCREMENT_COUNTER':
            return{
                ...state,
                count:state.count+action.payload
            }

        case DECREMENT_COUNTER:
            return{
                ...state,
                count:state.count-action.payload
            }
        default: return state
    }
}

export default counterReducer