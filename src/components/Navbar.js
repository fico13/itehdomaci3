import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Example = ({ onSearch, hasSearch }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Car Sales</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {hasSearch ? <Form inline>
            <FormControl onChange={(e) => { onSearch(e.target.value) }} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> : ''}

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Example;