import './sidebar.css';
import { RssFeed ,Chat,PlayCircle,Groups,Bookmark,HelpOutline,WorkOutline,Event,School}from "@mui/icons-material";
import {users} from '../../DumyData';
import CloseFriend from '../closeFriend/CloseFriend';
export default function Sidebar() {
  return (
<div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
             <RssFeed className='sidebarIcon'/>
             <span className="sidebarListItemText">
                  Feed
             </span>
            </li>
            <li className="sidebarListItem">
             <Chat className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Chat
             </span>
            </li>
            <li className="sidebarListItem">
             <PlayCircle className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Videos
             </span>
            </li>
            <li className="sidebarListItem">
             <Groups className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Groups
             </span>
            </li>
            <li className="sidebarListItem">
             <Bookmark className='sidebarIcon'/>
             <span className="sidebarListItemText">
                Bookmarks
             </span>
            </li>
            <li className="sidebarListItem">
             <HelpOutline className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Questions
             </span>
            </li>
            <li className="sidebarListItem">
             <WorkOutline className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Jobs
             </span>
            </li>
            <li className="sidebarListItem">
             <Event className='sidebarIcon'/>
             <span className="sidebarListItemText">
                Events
             </span>
            </li>
            <li className="sidebarListItem">
             <School className='sidebarIcon'/>
             <span className="sidebarListItemText">
                 Courses
             </span>
            </li>
        </ul>
        <buttton className="sidebarButton">Show  </buttton>
        <hr className='sidebarHr'/>
        <ul className="sideFriedList">
            {users.map((u)=>(
                <CloseFriend key={u.id} user={u}/>
            ))}
          
        </ul>
      </div>
</div>
  )
}
