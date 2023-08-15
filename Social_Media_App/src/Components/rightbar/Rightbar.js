import Online from '../online/Online';
import './rightbar.css';
import {users} from '../../DumyData';

export default function Rightbar({profile}) {
const HomeRightbar=()=>{
  return(
  <>
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
  </>
  )
         }
  const ProfileRightbar=()=>{
    return(
    < >
        
       <h4 className='rightbarTitle'>User information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Pune</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Akurdi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
       </div>

       <h4 className='rightbarTitle'>User friends</h4>
           <div className="rightbarfollowings">
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/1.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/2.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/4.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/5.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/6.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
             <div className="rightbarfollowing">
              <img className='rightbarfollowingImg' src="/assets/Persons/7.jpg" alt="" />
              <span className='rightbarfollowingName'>Dipak Pund</span>
             </div>
           </div>
           <img className ='rightbarAd' src="/assets/Persons/ad.jpg" alt="" />
    </>
    )
  }




  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      <ProfileRightbar/>
      </div>
    </div>
  )
}
