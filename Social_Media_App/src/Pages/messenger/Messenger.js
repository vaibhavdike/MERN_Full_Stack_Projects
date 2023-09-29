import React, { useContext, useEffect, useState } from 'react'
import Topbar from '../../Components/topbar/Topbar';
import './messenger.css'
import axios from 'axios';
import Conversation from '../../Components/conversation/Conversation';
import Message from '../../Components/message/Message';
import ChatOnline from '../../Components/chatOnline/ChatOnline';
import { AuthContext } from '../../context/AuthContext';
export default function Messenger() {
  const [conversations ,setConversations]=useState([ ]);
    const {user}=useContext(AuthContext);

    useEffect(()=>{


        const getConversation= async()=>{
            try{
              const res= await axios.get("http://localhost:8000/api/conversations/"+user._id);
              
              setConversations(res.data);
          
           
            }catch(err){
                console.log(err);
            }
        }


        getConversation();
    },[user._id])
    
    return (
        <>
            <Topbar />
            <div className='Messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className='chatMenuInput' />

                     {conversations.map((c)=>(
                        <Conversation conversation={c} curreantUser={user}/>
                     ))}
                     
                     
                       
                    
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
