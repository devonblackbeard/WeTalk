import { useEffect, useRef } from "react"
import { useState } from 'react'


const ConnectedUsers = ({users, username}) => {
  const myName = useRef(null)

  username().then((nameHere)=> {
    console.log('name is ', nameHere)
    myName.current = nameHere
  })

  return <div className='user-list'>
  <h4 className="participants">Participants</h4>
  {mapUsers(users, myName.current)}
  </div>
}
const mapUsers = (userList, username) => {
  // console.log(username().then(function(result){
  // //  console.log(result)
  //    myUser = result
  // }))
 // myUser = await username()

  return userList.map((u, idx)=> <h6 key={idx}>{u === username ? `${u} (You)`: u}</h6>)
}


export default ConnectedUsers
