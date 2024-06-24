import { useState } from 'react';
import './App.css';
import data from './data.js';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {

  let [char] =useState(data)

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

      <div className="container">
        <div className='row'>
          <div className='col-md-4'>
            <img src="https://www.gimhae.go.kr/_res/portal/img/sub/05/p01047_img8.png" width="80%"/>
            <h4>{ char[0].title }</h4>
            <p>{ char[0].price }</p>
          </div>
          <div className='col-md-4'>
            <img src="https://cdn.idomin.com/news/photo/202108/769634_452493_1211.jpg" width="80%"/>
            <h4>{ char[1].title }</h4>
            <p>{ char[1].price }</p>
            </div>
          <div className='col-md-4'>
            <img src="https://localsegye.co.kr/news/data/20230327/p1065569913862265_165_thum.jpg" width="80%"/>
            <h4>{ char[2].title }</h4>
            <p>{ char[2].price }</p>
            </div>
        </div>
      </div>

    </div>
  );
}

function Row(props) {
  return (
    <div className='row'>
      <h4>{props.char}</h4>
    </div>
  )
}

export default App;
