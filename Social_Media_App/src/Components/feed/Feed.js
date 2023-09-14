import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css';
import axios from "axios"

export default function Feed() {
  // const [Post,setPost]=useState([]);


  // useEffect(()=>{

  //   const fetchPost= async () => {
  //      const res= await axios.get("posts/timeline/64e14418549787dcd1a50481");
  //      console.log(res);
  //   }
  //   fetchPost();

  // },[]) ;
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {/* {post.map((p)=>(
           <Post key ={post.id} post={p}/>
        ))}
        */}
      
      </div>
    </div>
  )
}
