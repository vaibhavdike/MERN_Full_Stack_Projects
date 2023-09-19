import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css';
import axios from "axios"





export default function Feed({username}) {
  const [Posts,setPost]=useState([]);



  useEffect(()=>{
  
    const fetchPost= async () => {
    
     
    const res=username ? await axios.get("http://localhost:8000/api/posts/profile/"+username) :  
    await axios.get("http://localhost:8000/api/posts/timeline/64e1333f26bf00c0a4b4b612");
     setPost(res.data)
      }
    fetchPost();

  },[username]) ;
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Posts.map((p)=>(
           <Post key ={p._id} post={p}/>
        ))}
       
      
      </div>
    </div>
  )
}
