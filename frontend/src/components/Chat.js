import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'
import { Button } from 'react-bootstrap'
import ConnectedUsers from './ConnectedUsers'
import { useState } from 'react'
import { useEffect, useRef } from "react"


const Chat = ({ messages, sendMessage, closeConnection, users, getUsernameFromConnection }) =>
{
 // const myName = useRef(null)

  const [nameOfUser, setNameOfUser] = useState('')
  useEffect(() => {
    getUsernameFromConnection().then((nameHere)=> {
     // console.log('name is ', nameHere)
      setNameOfUser(nameHere)
    })
  })


  return( <div>
  <div className='leave-room'>
    <Button variant='danger' onClick={()=> closeConnection()}>Leave Room</Button>
  </div>

  <ConnectedUsers users={users} username={nameOfUser} />

  <div className='chat'>
    {/* <MessageContainer messages={messages} getUsernameFromConnection={nameOfUser} /> */}
    <SendMessageForm sendMessage={ sendMessage } />
   </div>
  </div>
  )
}

export default Chat
