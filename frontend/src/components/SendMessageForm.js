import { FormControl, InputGroup, Form, Button } from "react-bootstrap"
import { useState } from 'react'


const SendMessageForm = ({ s }) => {
  const [message, setMessage] = useState('');
  return <Form
      onSubmit={e=> {
        e.preventDefault();
        s(message);
        setMessage('');
      }}>
    <InputGroup>
    <FormControl placeholder='Type message...' onChange={ e => setMessage(e.target.value)} value={ message } />
    <InputGroup.Append>
      <Button variant='primary' type='submit'>Send</Button>
    </InputGroup.Append>
    </InputGroup>
  </Form>
}

export default SendMessageForm
