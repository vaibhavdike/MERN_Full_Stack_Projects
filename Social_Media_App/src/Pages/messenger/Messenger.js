import React from 'react'
import Topbar from '../../Components/topbar/Topbar';
import './messenger.css'
import Conversation from '../../Components/conversation/Conversation';
import Message from '../../Components/message/Message';
import ChatOnline from '../../Components/chatOnline/ChatOnline';
export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className='Messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className='chatMenuInput' />
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea placeholder='Write your message here....' className='chatBoxBottomTextarea'></textarea>
                            <button className='chatBoxBottomsubmitbtn'>send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
    )
}
