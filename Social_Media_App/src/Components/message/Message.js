import './message.css'
import {format} from 'timeago.js'

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="/assets/Persons/1.jpg" alt="" className='messageTopImg'/>
        <p className='messageTopText'>{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
