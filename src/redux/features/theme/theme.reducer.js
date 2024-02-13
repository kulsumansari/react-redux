import { TOGGLE } from "./theme.actions";

const initialState = 'dark';

const toggleReducer=(state= initialState, action)=>{
    switch(action.type){
        case TOGGLE:
            return state=== 'dark'? 'light' : 'dark';
        default:
            return state;
    }

}
export default toggleReducer;