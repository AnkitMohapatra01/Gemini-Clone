import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { Context } from '../../Context/Context';
export default function Sidebar() {
    const [extended,setextended]=useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context);
    const loadPrompt=async (prompt)=>{
      setRecentPrompt(prompt);
      await onSent(prompt);
    }
  return (
    <div className='Sidebar'>
      <div className="top">
      <RxHamburgerMenu onClick={()=>setextended(prev=>!prev)} className='menu'/>
      <div onClick={()=>{
        newChat();
      }} className="new-chat">
      <GoPlus />
        {extended?<p>New Chat</p>:null}
      </div>
      {extended?<div className="recent">
        <p className='recent-title'>
            Recent
        </p>
        {prevPrompts.map((item,index)=>{
          return(
            <div onClick={()=>loadPrompt(item)} className="recent-entry">
            <FaRegMessage />
                <p>{item.slice(0,18)}</p>
            </div>
          )
        })}
        
      </div>:null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
        <MdOutlineQuestionMark />
        {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
        <GoHistory />
        {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
        <IoIosSettings />
        {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}
