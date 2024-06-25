import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {

  let [char] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">AeYoung's shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {/* <Card char={char[0]}></Card>
          <Card char={char[1]}></Card>
          <Card char={char[2]}></Card> */}
          {
            char.map((a, i) => {
              return (
                <Card char={char[i]}></Card>
              )
            })
          }
        </div>
      </div>


    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={props.char.img} width="80%" />
      <h4>{props.char.title}</h4>
      <p>{props.char.content}</p>
    </div>
  )
}


export default App;
