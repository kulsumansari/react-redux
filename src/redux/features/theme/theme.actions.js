export const TOGGLE = 'TOGGLE';

export const themsActions= (type)=>{
    switch(type){
        case TOGGLE:
            return{
                type:'TOGGLE'
            }
        default:
            return {
                type: "INVALID"
            }
    }
}