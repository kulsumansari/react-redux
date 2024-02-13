import { INC, DEC } from "../counter/counter.actions";
let initialState =0

const counterReducer =(state = initialState, action)=>{
    switch(action.type){
        case INC:
            return state + 1
        case DEC:
            return state - 1
        default:
            return state;
    }
}

export default counterReducer;