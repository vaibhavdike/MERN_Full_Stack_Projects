import "./topbar.css";
import {Search,Person,Chat,Notifications} from "@mui/icons-material";
export default function Topbar() {
    return (
               
        
<div className='topbarContainer'>
    <div className="topbarleft">
               <span className="logo">Vabsocial</span>
          
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
                        <span className="topbariconitembadge">1</span>
                        </div>

                    
                </div>
                
                    <img className='topbarimg' src="assets/Persons/profileimg2.jfif" alt="" />
                
        </div>
 </div>
   

    );
}
