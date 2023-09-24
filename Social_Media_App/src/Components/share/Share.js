import { useContext, useRef, useState } from 'react';
import './share.css';
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
export default function Share() {
  const PF="/assets/Persons/";
  const {user}=useContext(AuthContext);
  const desc=useRef();
  const [file,setfile]=useState(null);
  const submitHandler=async(e)=>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value,
    }


    try{
      await axios.post("http://localhost:8000/api/posts",newPost);

    }catch(err){

    }

  }
  return (
    <div className='share'>
        <div className="shareWrapper">
          <div className="shareTop">
            <img className='shareProfileImg' src={user.profilePicture ? PF+user.profilePicture : PF+ "noProfileficture.png"} alt="" />
            <input placeholder={'Whats in your mind ' + user.username + " ? "} className='shareInput' ref={desc} />
          </div>
          <hr className='shareHr'/>
          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor='file' className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                <span className='shareOptionText'>Photos ans Videos</span>
                <input style={{display:"none"}} type="file" id='file' accept='.png ,.jpeg,.jpg' onChange={(e)=>{setfile(e.target.files[0])}} />
              </label>
              <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/>
                <span className='shareOptionText'>Tag</span>
              </div>
              <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                <span className='shareOptionText'>Location</span>
              </div>
              <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                <span className='shareOptionText'>Feelings</span>
              </div>
            </div>
            <button className="shareButton" type='submit'>Share</button>
          </form>
        </div>
    </div>
  )
}
