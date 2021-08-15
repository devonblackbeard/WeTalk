import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'
import { Button } from 'react-bootstrap'
import ConnectedUsers from './ConnectedUsers'

const user = localStorage.getItem('username')
const Chat = ({ messages, sMessage, closeConnection, users }) => <div>
  <div className='leave-room'>
    <Button variant='danger' onClick={()=> closeConnection()}>Leave Room</Button>
  </div>

  <ConnectedUsers users={users} username= {user}/>

  <div className='chat'>
    <MessageContainer messages={messages} username={user} />
    <SendMessageForm s={ sMessage } />
   </div>
  </div>


export default Chat
