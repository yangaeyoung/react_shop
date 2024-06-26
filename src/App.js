import { useState } from 'react';
import './App.css';
import data from './routes/data.js'
import Detail from './routes/detail.js'
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  let [char] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">AeYoung's shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }} >Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {
                  char.map((a, i) => {
                    return (
                      <Card char={char[i]}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail/:id" element={<Detail char={char} />} />

        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버: 애영</div>} />
          <Route path="location" element={<div>대한민국</div>} />
        </Route>

        <Route path="*" element={<div>잘못된 주소입니다.</div>}/>
        <Route path="/event" element={ <EventPage/> }>
          <Route path="one" element={<p>첫 주문 시 키링 증정</p>} />
          <Route path="two" element={<p>생일기념 쿠폰 받기</p>} />
        </Route>
      </Routes>


      {/* <Card char={char[0]}></Card>
          <Card char={char[1]}></Card>
          <Card char={char[2]}></Card> */}

    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
