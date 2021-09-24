import React from 'react';
import Cards from './WebCar';
import CardApi from './WebApi';
import { useHistory } from 'react-router';


const WebCard = () => {
    let history = useHistory();
      
        function handleClick() {
          history.push("/");
        }
    return (
        <div>
            <p className="fs-1 fw-bold text-center">Web Projects</p>
            <div className="d-flex justify-content-center align-items-center pb-3 flex-wrap">
            {CardApi.map((val,i)=>{
                return(<Cards
                key={i+1}
                img={val.img}
                name={val.name}
                link={val.link} />)
            })}
            </div>
            <div className="text-center mb-2">
            <button type="button" className="btn btn-outline-danger rounded-pill" onClick={handleClick}>Go home</button>
            </div>
        </div>
    )
}

export default WebCard;

