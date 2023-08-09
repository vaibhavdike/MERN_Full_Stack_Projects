import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import './home.css';
export default function home() {
  return (
    <>
 <Topbar/>
 <div className="homecontainer">
 <Sidebar/>
 <Feed/>
 <Rightbar/>
 </div>
 
 </>
  )
}
