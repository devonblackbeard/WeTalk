import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from './components/Chat';
import Lobby from './components/Lobby'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useState } from 'react'


const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([])

  const joinRoom = async (user,room) => {
    try {
      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44347/chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage", (user,message)=> {
        setMessages(messages => [...messages, { user,message }])
      })

      await connection.start();
      await connection.invoke("JoinRoom", {user,room})
      setConnection(connection)

    } catch (error) {
      console.log(error)
    }
  }

  return <div className = 'app'>
    <h2 style={{color:'white'}}>WeTalk</h2>
    <hr className='line'></hr>
    { !connection
      ? <Lobby joinRoom={ joinRoom }/>
      : <Chat messages= { messages } /> }
    </div>
  }


export default App;
