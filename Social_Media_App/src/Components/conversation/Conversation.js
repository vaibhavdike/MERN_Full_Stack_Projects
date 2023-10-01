import { useEffect, useState } from 'react'
import './conversation.css'
import axios from 'axios';

export default function Conversation({conversation,curreantUser}) {
  const [user,setUser]=useState(null);

  useEffect(()=>{
      const friendId=conversation.members.find((m)=>m !== curreantUser._id);
      const getUser=async()=>{
          const res= await axios.get("http://localhost:8000/api/users?userId="+ friendId);
          
         setUser(res.data);
      } 
      getUser();
  },[curreantUser._id,conversation.members])

  return (
    <>
    <div className='conversation'>
        <img src={user?.profilePicture ? "/assets/Persons/"+user.profilePicture : "/assets/Persons/noProfileficture.png"} alt="" className='conersationImg'/>
        <span className='conversationName'>{user?.username}</span>
      
    </div>


    </>
  )
}
