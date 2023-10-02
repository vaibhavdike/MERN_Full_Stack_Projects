import React, { useContext, useEffect, useRef, useState } from 'react'
import Topbar from '../../Components/topbar/Topbar';
import './messenger.css'
import axios from 'axios';
import Conversation from '../../Components/conversation/Conversation';

import Message from '../../Components/message/Message';
import ChatOnline from '../../Components/chatOnline/ChatOnline';
import { AuthContext } from '../../context/AuthContext';
export default function Messenger() {
  const [conversations ,setConversations]=useState([]);
  const [currentChat,setcurrentChat] =useState(null);
  const [message,setMessage] =useState(null);
const [newMessage,setNewMessage]=useState("");
    const {user}=useContext(AuthContext);
    const scrollref=useRef();

    useEffect(()=>{
       const getMessage= async()=>{
        try{
               const res=await axios.get("http://localhost:8000/api/messeges/" + currentChat?._id);
               console.log(res.data);
               setMessage(res.data);
        }catch(err){
            console.log(err);
        }
       }
       getMessage();
    },[currentChat])

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
    
     const handleClick = async(e) =>{
        e.preventDefault();
        const Messagenew={
            conversationId:currentChat._id,
            sender:user._id,
            text:newMessage
        }

        try{
         const res =  await axios.post("http://localhost:8000/api/messeges",Messagenew);
             setMessage([...message,res.data]);
             setNewMessage("");

        }catch(err){
            console.log(err);
        }
     }


useEffect(()=>{
   scrollref.current?.scrollIntoView({behavior:"smooth"});
},[message])



    return (
        <>
            <Topbar />
            <div className='Messenger'>
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder='Search for friends' className='chatMenuInput' />

                     {conversations.map((c)=>(
                        <div onClick={()=>setcurrentChat(c)}>
                        <Conversation conversation={c} curreantUser={user}/>
                        </div>
                     ))}
                     
                     
                       
                    
                    </div>
                </div> 
                
             
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                     {currentChat ? <>
                        <div className="chatBoxTop">
                       {message?.map((m)=>(
                        <div ref={scrollref}>
                        <Message message={m} own={m.sender === user._id}/>
                        </div>
                       ))}
                            
                        
                              </div>
                        <div className="chatBoxBottom">
                            <textarea onChange={
                                (e)=>{setNewMessage(e.target.value)}
                            } value={newMessage} placeholder='Write your message here....' className='chatBoxBottomTextarea' ></textarea>
                            <button className='chatBoxBottomsubmitbtn' onClick={handleClick}>send</button>
                        </div>
                        </> :<span className='noConversationText'>select conversation to start the chat.</span>}
                       
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
