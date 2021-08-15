const ConnectedUsers = ({users, username}) => <div className='user-list'>
  <h4>Participants</h4>
  {users.map((u, idx)=> <h6 key={idx}>{u === username ? `${u} (You)`: u}</h6> )}
</div>


export default ConnectedUsers
