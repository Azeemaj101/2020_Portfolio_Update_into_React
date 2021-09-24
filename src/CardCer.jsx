import React from 'react';
import Button from '@mui/material/Button';

const CardCer = (props) => {
    let funt = (link)=>{
    if(link !== "nan")
    {
        return(
            <a href={link} target="_blank" rel="noreferrer">
            <Button variant="contained" className="me-2" color="info" size="small">verify</Button>
            </a>
        )
    }}
    return (
        <div className="card card_css me-3 mb-3">
        <img src={process.env.PUBLIC_URL + props.img} className="card-img-top proImg1" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            {funt(props.link)}
        </div>
        </div>
    )
}

export default CardCer
