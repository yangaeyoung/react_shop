import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import styled from 'styled-components'

// let YellowBtn = styled.button`
//   background : ${props => props.bg};
//   color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//   padding : 10px;
// `

function Detail(props) {

  useEffect(()=>{
  })
  console.log('안녕')


  let[count, setCount] = useState(0)

  let { id } = useParams();
  let 찾을상품 = props.char.find(function (x) {
    return x.id == id
  });

  return (
    <div className="container">
      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={props.char[id].img} width="80%" />
        </div>
        <div className="col-md-4">
          <h4 className="pt-5">{찾을상품.title}</h4>
          <p>{찾을상품.content}</p>
          <p>{찾을상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;