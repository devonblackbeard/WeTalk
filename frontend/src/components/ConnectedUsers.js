import { useEffect, useRef } from "react"
import { useState } from 'react'


const ConnectedUsers = ({users, username}) => {

  return <div className='user-list'>
  <h4 className="participants">Participants</h4>
  {mapUsers(users, username)}
  </div>
}
const mapUsers = (userList, username) => {
  return userList.map((u, idx)=> <h6 key={idx}>{u === username ? `${u} (You)`: u}</h6>)
}


export default ConnectedUsers
