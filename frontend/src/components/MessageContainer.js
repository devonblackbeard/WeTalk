const MessageContainer = ({ messages }) => {
  return <div className='messageContainer'>
    { messages.map((m, index) =>
      <div key={index} className='user-message'>
        <div className='message bg-primary'> { m.messages }</div>
        <div className='from-user'>{ m.user }</div>
      </div>
    )}
  </div>
}


export default MessageContainer
