import React from 'react'
import Button from '@mui/material/Button';
import slider1 from './images/3_1.jpg';
import slider2 from './images/4_1.jpg';

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider1} className="d-block slide" alt="..."/>
        <div className="carousel-caption First_slider d-none d-md-block">
          <h4>AJ Programming HUB</h4>
          <p>MERN,ML,Python,C++,C,Java</p>
          <a href="http://azeemaj101.herokuapp.com/partials/Azeem-CV.pdf" style={{textDecoration: "none"}}  rel="noopener noreferrer">
        <Button variant="contained" className="me-2" color="info">Resume</Button>
        </a>
        <a href="https://github.com/Azeemaj101" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" className="bg-dark me-2">GitHub</Button>
        </a>
        <a href="https://www.linkedin.com/in/azeemaj101/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="error">LinkedIn</Button>
        </a>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slider2} className="d-block slide" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <a href="http://azeemaj101.herokuapp.com/partials/Azeem-CV.pdf" style={{textDecoration: "none"}}  rel="noopener noreferrer">
        <Button variant="contained" className="me-2" color="info">Resume</Button>
        </a>
        <a href="https://github.com/Azeemaj101" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" className="bg-dark me-2">GitHub</Button>
        </a>
        <a href="https://www.linkedin.com/in/azeemaj101/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="error">LinkedIn</Button>
        </a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/1600x900/?code,tecnology" className="d-block slide" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <a href="http://azeemaj101.herokuapp.com/partials/Azeem-CV.pdf" style={{textDecoration: "none"}}  rel="noopener noreferrer">
        <Button variant="contained" className="me-2" color="info">Resume</Button>
        </a>
        <a href="https://github.com/Azeemaj101" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" className="bg-dark me-2">GitHub</Button>
        </a>
        <a href="https://www.linkedin.com/in/azeemaj101/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="error">LinkedIn</Button>
        </a>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    )
}

export default Slider
