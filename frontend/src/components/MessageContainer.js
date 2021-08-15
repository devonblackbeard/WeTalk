import { useEffect, useRef } from "react"

const MessageContainer = ({ messages, username }) => {
  const messageRef = useRef();
 // const currentUser = localStorage.getItem('username')
console.log('username', username);

  useEffect(() => {
    if(messageRef && messageRef.current){
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({left:0, top: scrollHeight - clientHeight,
      behavior: 'smooth'
    });
    }
  }, [messages]) // when messages change, useEffect gets run

  return <div ref={messageRef} className='message-container'>
    {
    messages.map((m, index) =>
      <div key={index} className='user-message'>
        <div className='message bg-primary'> { m.message }</div>
        <div className='from-user' >{ m.user === username ? 'You': m.user }</div>
      </div>
    )}
  </div>
}

export default MessageContainer
