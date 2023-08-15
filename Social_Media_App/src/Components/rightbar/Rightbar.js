import Online from '../online/Online';
import './rightbar.css';
import {users} from '../../DumyData';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthDayContainer">
          <img className='birthDayImg' src="/assets/Persons/gift.jpg" alt="" />
          <span className="birthDayText"><b>Pranav Joshi</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className ='rightbarAd' src="/assets/Persons/ad.jpg" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
         {users.map((u)=>(
          <Online key={u.id} user={u}/>
         ))}
        </ul>
      </div>
    </div>
  )
}
