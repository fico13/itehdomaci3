import Navbar from './Navbar.js';
import AddCar from './AddCar.js';
import Cars from './Cars.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Home = () => {

  let baseCars = [
    {
      id: 1,
      name: "Audi Q7 3.0TDI S LINE MATRIX",
      year: 2015,
      hp: 272,
      cubage: 2967,
      engine: "Disel",
      price: "35.590",
      mileage: "174.117",
      img: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1766/17660815/c4bad69014f0-800x600.jpg',
      desc: `-KUPLJEN NOV U DECEMBRU 2015
      - AUTOMOBIL ODRŽAVAN U OVLAŠĆENOM SERVISU.
      - S LINE CHROME PAKET OPREME.
      - KUPAC NE PLAĆA POREZ NA PRENOS APSOLUTNIH PRAVA.
      - MOGUĆNOST FINANSIRANJA PUTEM KREDITA I LIZINGA.
      - MOGUCNOST PLAĆANJA CELOKUPNOG IZNOSA PREKO RAČUNA.

      -VOZILO U SVAKODNEVNOJ UPOTREBI,POTREBNO SE NAJAVITI PRE DOLASKA!`,
    },
    {
      id: 2,
      name: "BMW 730 d Limousine",
      year: 2006,
      hp: 231,
      cubage: 2993,
      engine: "Disel",
      price: "19.500",
      mileage: "177.000",
      img: 'https://media.ed.edmunds-media.com/bmw/7-series/2020/oem/2020_bmw_7-series_sedan_745e-xdrive-iperformance_fq_oem_3_1600.jpg',
      desc: `Vozilo u odličnom stanju, kupljeno kao novo u Srbiji i redovno servisirano u ovlašćenim servisima.
        Vozilo je na komisionoj prodaji od prvog vlasnika, potrebna najava pre dolaska.
        Vozilo je garažirano i voženo isključivo u letnjim uslovima. Na vozilu se nalaze Bridgestone letnji pneumatici koji su prešli 10.000km.
        Vozilo poseduje nov akumulator.`,
    },
    {
      id: 3,
      name: "Ford Kuga 2.0 TDCI INDIVIDUAL",
      year: 2012,
      hp: 163,
      cubage: 1997,
      engine: "Disel",
      price: "10.790",
      mileage: "143.265",
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford_Kuga_2.0_TDCi_Individual-Styling-Paket_rear_20100925.jpg',
      desc: `FORD KUGA INDIVIDUAL 2012 CH
        JEDINSTVEN SALONSKI PRIMERAK
        SVAKA REC JE SUVISNA
        REGISTROVAN,VLASNIK
        NAVIGACIJA
        3 KLJUCA
        DVA SETA TOCKOVA
        ZADNJE DVE SLIKE SA ZIMSKIM GUMAMA
        MALI SERVIS uradjen u fordovom servisu
        SALONSKO STANJE
        BEZ ZAMENA I SMS PORUKA
        SRETNA KUPOVINA`,
    },
    {
      id: 4,
      name: "Volkswagen Golf 7 HIGHLINE",
      year: 2014,
      hp: 105,
      cubage: 1598,
      engine: "Disel",
      price: "8.000",
      mileage: "248.044",
      img: 'http://www.autoviva.com/img/photos/871/the_new_golf_has_just_gone_on_sale_but_vw_is_still_rolling_o_large_112871.jpg',
      desc: `Poseduje servisnu knjigu od prvog uradjenog servisa.
        3 sistema zastite protiv kradje.
        Zatamljena stakla, zadnja 95% a prednja 23%. Folije su postavljene u Blackglassu.
        Alu felne 18' original, nove zimske gume.
        Motor perfektan, limarija odlicna, bez korozije.
        Mali servis uradjen na 243400km.
        Promenjene pločice.
        Visok nivo opreme.
        U slicnoj ceni ne mozete naci golfa 7 sa alcantara sedistima...
        Odlican automobil za pocetnika.`,
    },
    {
      id: 5,
      name: "Opel Astra J 1.4 turbo 140 k s",
      year: 2020,
      hp: 140,
      cubage: 1398,
      engine: "Petrol",
      price: "12.990",
      mileage: "0",
      img: 'https://gcdn.polovniautomobili.com/user-images/thumbs/1511/15113417/eab4c65e0a17-800x600.jpg',
      desc: `*** NOVO VOZILO *** OGRANICENA KOLICINA. ***
        Astra J sedan sa 1.4 turbo motorom sa 140ks. Godina proizvodnje 2020. Fabricka garancija 5 godina.       
        Cena 12.990 je bez alu felni od 16 cola. Cena sa felnama je 13.250€ .        
        Mogucnost kupovine na kredit ili lizing.Sve se zavrsava u nasem salonu bez odlaska u banku.       
        Mogucnost ugradnje plina.   
        Mogucnost zamene staro za novo.
        Procena vaseg vozila se vrsi kod nas u servisu i potpuno je besplatna.`,
    }
  ];

  const [allCars, setAllCars] = useState(baseCars);
  const [searchedCars, setSearchedCars] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);

  // Add Car
  function addCar(car) {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newCar = { id, ...car };
    baseCars.push(newCar);
    setAllCars([...allCars, newCar]);
  }

  // Delete Car
  function deleteCar(id) {
    setAllCars(allCars.filter((car) => car.id !== id));
  }

  // Search Cars
  function searchCars(name) {
    setSearchedCars(allCars.filter((car) => car.name.toLowerCase().includes(name.toLowerCase())));
    if (name == '') {
      setHasSearch(false);
    } else {
      setHasSearch(true);
    }
  }

  return (
    <>
      <Navbar hasSearch={true} onSearch={searchCars} />

      <Container>
        <Cars cars={allCars} searchedCars={searchedCars} onDelete={deleteCar} hasSearch={hasSearch} />
        <Row className="mt-5 mb-5">
          <Col className="text-center">
            <Accordion defaultActiveKey="0">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Button variant="dark">Add New Car <FaPlus style={{ position: "relative", top: "-1px" }} /></Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <AddCar onAdd={addCar} />
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
