import React from 'react'
import "./SideBar.css"
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function SideBar() {

    const [rooms,setRooms] = React.useState([]);
    React.useEffect(()=>{

    },[])
    
    return (
        <div className='sidebar'>
          <div className="header">
                  <Avatar />
             <div className='sb_hright'>
                <IconButton>
                  <DonutLargeIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
             </div>
          </div>
    
          <div className='search'>
            <div className='search_container'>
              <SearchOutlinedIcon />
              <input className="search_text" placeholder='Search or start a new chat' type="text" />
            </div>
              
          </div>
          <div className='chats'>
                <SidebarChat addNewChat/>
                
          </div>
        </div>
      )
    }
    
    export default SideBar
    

















