import { useState } from "react";
import { Form, Button } from "react-bootstrap"

const Lobby = ({joinRoom}) => {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();

  return <Form className="lobby"
    onSubmit={e => {
      e.preventDefault();
      joinRoom(user,room)
    }}
  >
    <Form.Group>
      <Form.Control placeholder = 'Username' onChange={e => setUser(e.target.value) }
      />
      <Form.Control placeholder='Room' onChange={e => setRoom(e.target.value)} />
    </Form.Group>
    <Button variant='success' type='submit' disabled={ !user || !room}>Join</Button>

  </Form>
}

<script>
</script>

export default Lobby;
