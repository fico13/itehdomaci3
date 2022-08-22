
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const AddCar = ({ onAdd }) => {

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [hp, setHP] = useState('')
  const [cubage, setCubage] = useState('')
  const [engine, setEngine] = useState('')
  const [mileage, setMileage] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDescription] = useState('')
  const [img, setIMG] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();


    console.log("A");

    if (!name) {
      alert("Unesite naziv automobila");

      return;
    }

    if (!year) {
      alert("Unesite godinu proizvodnje");

      return;
    }

    if (!hp) {
      alert("Unesite konjsku snagu");

      return;
    }

    if (!cubage) {
      alert("Unesite kubikažu");

      return;
    }

    if (!engine) {
      alert("Unesite pogon");

      return;
    }

    if (!mileage) {
      alert("Unesite kubikažu");

      return;
    }

    if (!price) {
      alert("Unesite cenu");

      return;
    }

    if (!desc) {
      alert("Unesite opis");

      return;
    }

    if (!img) {
      alert("Unesite link do slike");

      return;
    }


    console.log("A");

    onAdd({ name, year, hp, cubage, engine, price, mileage, img, desc });
    setName('');
    setYear('');
    setHP('');
    setCubage('');
    setEngine('');
    setMileage('');
    setPrice('');
    setDescription('');
    setIMG('');
  }

  return (
    <Form className="text-left" onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Naziv</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Skoda Superb" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Godina proizvodnje</Form.Label>
        <Form.Control type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Ex: 2001, 2007, 2020" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Konjske snage</Form.Label>
        <Form.Control type="number" value={hp} onChange={(e) => setHP(e.target.value)} placeholder="Ex: 80, 150, 280" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Kubikaža</Form.Label>
        <Form.Control type="number" value={cubage} onChange={(e) => setCubage(e.target.value)} placeholder="Ex: 1298, 1997, 3996" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Pogon</Form.Label>
        <Form.Control type="text" p value={engine} onChange={(e) => setEngine(e.target.value)} placeholder="Ex: Petrol / Disel" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Kilometraža</Form.Label>
        <Form.Control type="text" value={mileage} onChange={(e) => setMileage(e.target.value)} placeholder="Ex: 248.000, 174.000" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Cena</Form.Label>
        <Form.Control type="text" p value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Ex: 9.000, 13.990" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Opis</Form.Label>
        <Form.Control as="textarea" value={desc} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Unesite opis" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Link do slike</Form.Label>
        <Form.Control type="text" p value={img} onChange={(e) => setIMG(e.target.value)} placeholder="Unesite link do slike" />
      </Form.Group>

      <button className="d-block w-100 btn btn-dark" type="submit">Potvrdi <FaCheck style={{ position: "relative", top: "-1px" }} /></button>
    </Form>
  )
}

export default AddCar
