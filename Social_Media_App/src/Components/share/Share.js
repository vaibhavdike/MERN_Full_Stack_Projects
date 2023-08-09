import './share.css';
import {PermMedia} from '@mui/icons-material';
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
          <div className="shareTop">
            {/* <img className='shareProfileImg' src="/assets/Persons/5.jpg" alt="" /> */}
            <input placeholder='Whats in your mind' className='shareInput' />
          </div>
          <hr className='shareHr'/>
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                    <PermMedia className='shareIcon'/>
                <span className='shareOptionText'>Photos and Videos</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
