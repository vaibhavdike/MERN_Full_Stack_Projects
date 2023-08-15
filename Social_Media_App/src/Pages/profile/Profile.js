import './profile.css'
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

export default function Profile() {
  return (
   <div className="profile">
   <Topbar/>
 <div className="profilecontainer">
 <Sidebar/>
 <div className="profileRightbar">
            <div className="profileRightbarTop">
                <div className="profilecover">
                <img className='profileCoverImg' src="/assets/Persons/profilecover.jpg" alt="" />
                <img className='profileUserImg' src="/assets/Persons/profileimg2.jfif" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Vaibhav Dike</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                </div>
            </div>
                <div className="profileRightbarBottom">
                        <Feed/>
                        <Rightbar/>
                </div>
</div>
 
 </div>
 </div>
  )
}
