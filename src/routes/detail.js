import { useParams } from "react-router-dom";

function Detail (props) {

let {id} = useParams();

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={props.char[id].img} width="80%" />
          </div>
          <div className="col-md-4">
            <h4 className="pt-5">{props.char[id].title}</h4>
            <p>{props.char[id].content}</p>
            <p>{props.char[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
  )
}

export default Detail;