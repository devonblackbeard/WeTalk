import { useEffect, useRef } from "react"

const MessageContainer = ({ messages, username }) => {
  const messageRef = useRef();

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
        <div key={index} className= {m.user.toString() === username ? 'sender-side': 'receiver-side'}>
          <div className='message bg-primary'> { m.message }</div>
          <div className='from-user' >{ m.user.toString() === username ? 'You': m.user }</div>
        </div>
    )}
  </div>
}


export default MessageContainer
