import './profile.css'
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';

export default function Profile() {
  const username=useParams().username;
 

  const [user,setUser]=useState({});
  useEffect(()=>{
    const fetchuser=async()=>{
      const res=await axios.get(`http://localhost:8000/api/users/?username=${username}`)
      setUser(res.data);
    }  
    fetchuser();

    
  },[username])
  return (
   <div className="profile">
   <Topbar/>
 <div className="profilecontainer">
 <Sidebar/>
 <div className="profileRightbar">
            <div className="profileRightbarTop">
                <div className="profilecover">
                <img className='profileCoverImg' src={user.coverPicture || "/assets/Persons/profilecover.jpg"} alt="" />
                <img className='profileUserImg' src={user.profilePicture || "/assets/Persons/noProfileficture.png"} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
                <div className="profileRightbarBottom">
                        <Feed username={username} />
                        <Rightbar user={user}/>
                </div>
</div>
 
 </div>
 </div>
  )
}
