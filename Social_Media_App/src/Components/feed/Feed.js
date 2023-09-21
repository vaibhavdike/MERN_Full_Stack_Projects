import { useContext, useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css';
import axios from "axios"
import { AuthContext } from '../../context/AuthContext';





export default function Feed({username}) {
  const [Posts,setPost]=useState([]);
  const {user} =useContext(AuthContext);



  useEffect(()=>{
  
    const fetchPost= async () => {
    
     
     const res=username ? await axios.get("http://localhost:8000/api/posts/profile/"+username) :  
    await axios.get("http://localhost:8000/api/posts/timeline/" + user._id);
   
     setPost(res.data)
      }
    fetchPost();

  },[username,user._id]) ;
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
