import React from 'react'

const WebCar = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>
        <div className="card card_css me-3 mb-3">
        <img src={props.img} className="card-img-top proImg" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
        </div>
        </div>
        </a>
    )
}

export default WebCar
