import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css';
import axios from "axios"





export default function Feed() {
  const [Posts,setPost]=useState([]);



  useEffect(()=>{
  
    const fetchPost= async () => {
    
     
    const res= await axios.get("http://localhost:8000/api/posts/timeline/64e0c9f566beeb119a0c0ef8");
     setPost(res.data)
      }
    fetchPost();

  },[]) ;
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
           <Post key ={p.id} post={p}/>
        ))}
       
      
      </div>
    </div>
  )
}
