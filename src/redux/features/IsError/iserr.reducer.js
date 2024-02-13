import { IS_ERR } from "./iserr.actions";

const initialState = false;

const errorReducer=(state = initialState , action)=>{
    switch(action.type){
        case IS_ERR:
            return !state;
        default:
            return state;
    }
}
export default errorReducer;