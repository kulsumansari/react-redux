import { FETCH_POSTS, postsActions } from "../redux/features/posts/posts.actions";

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts=()=>{
    return async(dispatch)=>{
        try{
            let res = await fetch(URL)
            let data = await res.json();
            return dispatch(postsActions(FETCH_POSTS, data))
        }catch(err){
            console.log("Error:" , err)
        }     
    }
}