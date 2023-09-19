import './post.css';
import {MoreVert} from '@mui/icons-material';

import { useEffect, useState } from 'react';
import axios from 'axios';
import * as timeago from 'timeago.js';

import { Link } from 'react-router-dom';
export default function Post({post}) {
    const [like,setlike]=useState(post.like.length);
    const [islike,setislike]=useState(false);
    const [User,setUser]=useState({});
    const PF="/assets/post/";
  

    useEffect(()=>{

        const fetchUser=async()=>{
            const res=await axios.get(`http://localhost:8000/api/users?userId=${post.userId}`);
            setUser(res.data);
        }

        fetchUser();
    },[post.userId]);


    const likeHandler=()=>{
        setlike(islike ? like-1:like+1);
        setislike(!islike);
    }
  
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="posttopLeft">
                    <Link to={`profile/${User.username}`}>
                    <img  className ='postProfileImg' src={User.profilePicture || "/assets/Persons/noProfileficture.png"} alt="" />
                    </Link>
                    <span className="postUserName">{User.username}</span>
                    <span className="postDate">{timeago.format(post.createdAt)}</span>
                </div>
                <div className="posttopRight">
                 <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img className='postImg' src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='postlikeIcon' src="/assets/Persons/like.png" onClick={likeHandler} alt="" />
                    <img className='postlikeIcon' src="/assets/Persons/heart1.webp" onClick={likeHandler} alt="" />
                    <snap className="postLikeCounter">{like} people like it</snap>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comments} comments</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}
