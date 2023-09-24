import React from 'react'
import Topbar from '../../Components/topbar/Topbar';
import './messenger.css'
import Conversation from '../../Components/conversation/Conversation';
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
                        Box
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        Online
                    </div>
                </div>
            </div>
        </>
    )
}
