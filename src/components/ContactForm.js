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
      alert("Unesite ime");

      return;
    }

    if (!lastname) {
      setSuccessfull(0);
      alert("Unesite prezime");

      return;
    }

    if (!message) {
      setSuccessfull(0);
      alert("Unesite poruku");

      return;
    }

    setSuccessfull(1);
  }

  return (
    <Form onSubmit={submitForm}>

      {successfull === 1 ? <Alert  variant="success">
        Uspešno poslato. <FaCheck style={{position: "relative", top:"-1px"}} />
      </Alert> : successfull === 0 ? <Alert variant="danger">
          Postoje greške u vašoj formi.
      </Alert> : ''}

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Ime</Form.Label>
        <Form.Control value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Unesite ime" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Prezime</Form.Label>
        <Form.Control value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Unesite prezime" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Unesite tekst poruke</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Unesite tekst poruke" />
      </Form.Group>

      <Button className="w-100 d-block btn-dark" variant="primary" type="submit">
        Potvrdi
      </Button>
    </Form>
  )
}

export default ContactForm
