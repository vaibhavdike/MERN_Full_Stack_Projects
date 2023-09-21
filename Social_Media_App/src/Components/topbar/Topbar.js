import "./topbar.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Search,Person,Chat,Notifications} from "@mui/icons-material";
import { useContext } from "react";
export default function Topbar() {
    const {user}=useContext(AuthContext);
    const PF="/assets/Persons/";
    return (
               
        
<div className='topbarContainer'>
    <div className="topbarleft">
             <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Vabsocial</span>
                </Link>
          
               </div>
            <div className="topbarcenter">
                <div className="searchbar">
                   <Search className="searchIcon"/>
                   <input placeholder='Search for friend ,posts and videos' className="searchinput" />
                </div>
    
            </div>
        <div className="topbarright">
                <div className="topbarlinks">
                    <span className="topbarlinkspan">Homepage</span>
                    <span className="topbarlinkspan">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconsitem">
                        <Person/>
                        <span className="topbariconitembadge">1</span>
                        </div>
                    <div className="topbariconsitem">
                        <Chat/>
                        <span className="topbariconitembadge">2</span>
                        </div>
                    <div className="topbariconsitem">
                        <Notifications/>
                        <span className="topbariconitembadge"></span>
                        </div>

                    
                </div>
                 <Link to={`/profile/${user.username}`}>
                    <img className='topbarimg' src={user.profilePicture ?PF+user.profilePicture : PF+"noProfileficture.png" } alt="" />
                    </Link>
        </div>
 </div>
   

    );
}
