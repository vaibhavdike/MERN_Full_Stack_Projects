import './post.css';
import {MoreVert} from '@mui/icons-material';

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="posttopLeft">
                    <img  className ='postProfileImg' src="/assets/Persons/5.jpg" alt="" />
                    <span className="postUserName">Shakti Mohan</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="posttopRight">
                 <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post:) </span>
                <img className='postImg' src="/assets/Persons/8.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='postlikeIcon' src="/assets/Persons/like.png" alt="" />
                    <img className='postlikeIcon' src="/assets/Persons/heart1.webp" alt="" />
                    <snap className="postLikeCounter">32 people like it</snap>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comment</span>
                </div>
            </div>
        </div>
    
    </div>
  )
}
