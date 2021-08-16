import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from './components/Chat';
import Lobby from './components/Lobby'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useState } from 'react'


const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([]);

  const joinRoom = async (user,room) => {
    try {
      const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44347/chat")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage", (user,message)=> {
        setMessages(messages => [...messages, { user,message }])
      })

      connection.onclose(e=> {
        setConnection.apply();
        setMessages([]);
        setUsers([])
      })

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      })

      await connection.start();
      await connection.invoke("JoinRoom", {user,room})
      setConnection(connection)

    } catch (error) {
      console.log(error)
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
      localStorage.removeItem('sessionInfo')
    } catch (error) {
      console.log(error)
    }
  }

  const getUsernameFromConnection = async () => {
    console.log('In get username');

    // key is connection Id
    // value is Room and Username
    const connectionInfo = await connection.invoke("GetUsername", connection.connectionId)
    return connectionInfo.value.user
  }

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (error) {
      console.log(error);
    }
  }

  return <div className='app'>
    <h1 style={{color:'white'}}>HelpDesk</h1>
    <hr className='line'/>
    {
      !connection
      ? <Lobby joinRoom={ joinRoom }/>
      : <Chat messages= { messages } sendMessage ={ sendMessage }
        closeConnection={ closeConnection } users={users} getUsernameFromConnection={getUsernameFromConnection}
      />
    }
    </div>
  }


export default App;
