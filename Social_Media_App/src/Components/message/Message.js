import './message.css'

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="/assets/Persons/1.jpg" alt="" className='messageTopImg'/>
        <p className='messageTopText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="messageBottom">1 minits ago</div>
    </div>
  )
}
