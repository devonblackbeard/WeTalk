const ConnectedUsers = ({users, username}) => <div className='user-list'>
  <h4 className="participants">Participants</h4>
  {mapUsers(users, username)}
</div>

let myUser = ''
const mapUsers = async (userList, username)=>{
  // console.log(username().then(function(result){
  // //  console.log(result)
  //    myUser = result
  // }))
  myUser = await username()

console.log('my user:', myUser)
  return userList.map((u, idx)=> <h6 key={idx}>{u === myUser ? `${u} (You)`: u}</h6>)
}


export default ConnectedUsers
