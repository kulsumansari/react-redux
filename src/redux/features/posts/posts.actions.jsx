
export const FETCH_POSTS  = 'FETCH_POSTS';

export const postsActions= (type,payload)=>{
    
    switch(type){
        case FETCH_POSTS :
            return{
                payload:[...payload],
                type: FETCH_POSTS 
            }
        default:
            return {
                type: "INVALID"
            }
        }
}
