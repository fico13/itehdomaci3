import { FaExclamationCircle, FaTimes } from 'react-icons/fa';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

const Task = ({ car, onDelete }) => {

  function description() {
    if (car.desc.length > 150) {
      return <Accordion>
        {car.desc.substring(0, 150)}
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">{car.desc.substring(150)}</Card.Body>
        </Accordion.Collapse>
        <Accordion.Toggle className="pl-0 d-block" as={Button} variant="link" eventKey="0">
          Prikaži više
        </Accordion.Toggle>

      </Accordion>;
    }

    return car.desc;
  }

  return (
    <Card>
      <Card.Img variant="top" src={car.img} />
      <Card.Body>
        <Card.Title>{car.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
        <p className='m-0'>ks: {car.hp} KS</p>
        <p className='m-0'>kubikaža: {car.cubage} cm3</p>
        <p className='m-0'>pogon: {car.engine}</p>
        <p className='m-0'>kilometraža: {car.mileage} km</p>
        <p className='m-0 mb-2'>cena: {car.price} &euro;</p>
        
        <Card.Text className="mb-0">
          {description()}
        </Card.Text>

        <Button variant="danger" onClick={() => onDelete(car.id)} >Obriši <FaExclamationCircle style={{position: "relative", top: "-1px"}} /></Button>
      </Card.Body>
    </Card>
  )
}

export default Task
