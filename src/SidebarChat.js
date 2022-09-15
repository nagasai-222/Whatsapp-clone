import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBarChat.css"

function SidebarChat({addNewChat}) {
    const [seed,setSeed] = React.useState(100)
    React.useEffect(()=>
    {setSeed(Math.floor(Math.random()*1000))},[])

    const createChat= ()=>{
        const roomName = prompt("Enter the room name");
        if(roomName){
            //Some clever stuff...
        }
    }

  return !addNewChat ?(
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='chat_info'>
            <h2>Name</h2>
            <p>Last Message...</p>
        </div>
    </div>
  )
  :(
    <div className="sidebarChat" onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat
