
export const ADD_USER = 'ADD_USER';

export const userActions= (type,payload)=>{
    let actionObject= { 
        payload : payload ? { ...payload} : undefined
    }
    
    switch(type){
        case ADD_USER:
            return{
                ...actionObject,
                type:'ADD_USER',
            }
        default:
            return {
                type: "INVALID"
            }
        }
}
