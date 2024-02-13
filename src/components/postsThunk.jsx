import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { fetchPosts } from '../API/postsAPI'
 function Posts(){
    const posts = useSelector((state)=> state.posts)
    const dispatch = useDispatch()
    const getPosts=()=>{
        dispatch(fetchPosts())
    }
    
    return(
        <div>
           <button onClick={getPosts}>Get Post</button>
           {posts.map((post)=>{
               return <p key={post.id}>{post.id}) {post.title}</p>
           })}
        </div>
    )
}
export default Posts;