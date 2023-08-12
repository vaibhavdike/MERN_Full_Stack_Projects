import Post from '../post/Post';
import Share from '../share/Share';
import './Feed.css';
import{post} from '../../DumyData';
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {post.map((p)=>(
           <Post key ={post.id} post={p}/>
        ))}
       
      
      </div>
    </div>
  )
}
