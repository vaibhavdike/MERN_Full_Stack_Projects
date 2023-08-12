import './post.css';
import {MoreVert} from '@mui/icons-material';
import{users} from '../../DumyData';
export default function Post({post}) {
  
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="posttopLeft">
                    <img  className ='postProfileImg' src={users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">{users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="posttopRight">
                 <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='postlikeIcon' src="/assets/Persons/like.png" alt="" />
                    <img className='postlikeIcon' src="/assets/Persons/heart1.webp" alt="" />
                    <snap className="postLikeCounter">{post.like} people like it</snap>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comments} comments</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}
