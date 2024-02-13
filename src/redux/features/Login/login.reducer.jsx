import { IS_LOGIN } from "./login.actions";

const initialState = false;

const toggleLoginReducer=(state = initialState , action)=>{
    switch(action.type){
        case IS_LOGIN:
            return state ? false : true;
        default:
            return state;
    }
}
export default toggleLoginReducer;