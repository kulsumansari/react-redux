export const IS_LOGIN = 'IS_LOGIN';

export const loginActions= (type)=>{
    switch(type){
        case IS_LOGIN:
            return{
                type:'IS_LOGIN'
            }
        default:
            return {
                type: "INVALID"
            }
    }
}