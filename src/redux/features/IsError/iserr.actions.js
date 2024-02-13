export const IS_ERR = 'IS_ERR';

export const errorActions= (type)=>{
    switch(type){
        case IS_ERR:
            return{
                type:'IS_ERR'
            }
        default:
            return {
                type: "INVALID"
            }
    }
}