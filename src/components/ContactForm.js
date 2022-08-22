import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ContactForm = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [successfull, setSuccessfull] = useState(-1);
  const [show, setShow] = useState(true);

  function submitForm(e) {
    e.preventDefault();

    if (!firstname) {
      setSuccessfull(0);
      alert("Please enter firstname");

      return;
    }

    if (!lastname) {
      setSuccessfull(0);
      alert("Please enter lastname");

      return;
    }

    if (!message) {
      setSuccessfull(0);
      alert("Please enter message");

      return;
    }

    setSuccessfull(1);
  }

  return (
    <Form onSubmit={submitForm}>

      {successfull === 1 ? <Alert  variant="success">
        Successfully sent. <FaCheck style={{position: "relative", top:"-1px"}} />
      </Alert> : successfull === 0 ? <Alert variant="danger">
          There were errors in your form.
      </Alert> : ''}

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Enter your firstname" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Enter your lastname" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
      </Form.Group>

      <Button className="w-100 d-block btn-dark" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default ContactForm
