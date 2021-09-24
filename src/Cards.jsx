import React from 'react'
import {NavLink} from 'react-router-dom';

const Cards = (props) => {
        if(props.link === "https://www.slideshare.net/MuhammadAzeem272")
        {
            return(
            <a href={props.link} target="_blank" className="text-dark" style={{textDecoration:"none"}} rel="noreferrer">
                <div className="card card_css me-3 mb-3">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                </div>
            </a>);
        }
        else{
            return(
          <NavLink exact className="nav-link text-dark" style={{textDecoration:"none"}} activeClassName="text-light" to={props.link}>
            <div className="card card_css me-3 mb-3">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                </div>
          </NavLink>);
            
        }
}

export default Cards
