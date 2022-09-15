import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import "./Chat.css"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input,setInput] = React.useState("");
    const [seed,setSeed] = React.useState();
    React.useEffect(()=>
    {setSeed(Math.floor(Math.random()*1000))},[])

    const sendMessage= (e)=>{
        e.preventDefault();
        console.log("You typed :", input);
        setInput("");
    }
  return (
    <div className="chat">
        <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='header_info'>
                <h3>Room Name</h3>
                <p>Last Seen....</p>
            </div>
            <div className='header_right'>
                <IconButton>
                <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                <AttachFileIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>

        </div>
        <div className='chat_body'>
            <p className="chat_msg">
                <span className='chat_name'>Nagasai</span>
                Hey, Hello!!
                <span className='chat_timestamp'>3:52pm</span>
            </p>
            <p className={`chat_msg ${true && "chat_reciver"}`}>
                <span className='chat_name'>Nagasai</span>
                Hey, Hello!!
                <span className='chat_timestamp'>3:52pm</span>
            </p>
            
        </div>
        <div className='chat_footer'>
            
            <IconButton>
                <InsertEmoticonIcon />
            </IconButton>
            <form>
                <input type="text" value={input} 
                onChange={(e)=>setInput(e.target.value)}  placeholder='Type a Message'/>
                <button onClick={sendMessage} type="submit">Send a Message</button>
            </form>
            <IconButton>
            <MicIcon />
            </IconButton>

        </div>
      
    </div>
  )
}

export default Chat





