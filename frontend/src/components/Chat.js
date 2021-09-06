import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'
import { Button } from 'react-bootstrap'
import ConnectedUsers from './ConnectedUsers'

const Chat = ({ messages, sendMessage, closeConnection, users, getUsernameFromConnection }) => <div>
  <div className='leave-room'>
    <Button variant='danger' onClick={()=> closeConnection()}>Leave Room</Button>
  </div>

  <ConnectedUsers users={users} username={ getUsernameFromConnection } />

  <div className='chat'>
    <MessageContainer messages={messages} getUsernameFromConnection={getUsernameFromConnection} />
    <SendMessageForm sendMessage={ sendMessage } />
   </div>
  </div>


export default Chat
