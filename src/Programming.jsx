import React from 'react';
import Cards from './ProgrammingCard';
import CardApi from './ProjectApi';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {NavLink} from 'react-router-dom';

const ProjectsCard = () => {
    return (
        <div>
            <p className="fs-1 fw-bold text-center">Programming Projects</p>
            <div className="d-flex justify-content-center align-items-center pb-3 flex-wrap">
            {CardApi.map((val,i)=>{
                return(<Cards
                key={i+1}
                img={val.img}
                name={val.name}
                link={val.link} />)
            })}
            </div>
            <div className="text-center mb-3">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <NavLink exact className="bg-primary" to="/programming" style={{textDecoration:"none"}}><Button className="text-light">1</Button></NavLink>
          <NavLink exact className="bg-info" to="/programming2" style={{textDecoration:"none"}}><Button className="text-light">2</Button></NavLink>            
          <NavLink exact className="bg-info" to="/" style={{textDecoration:"none"}}><Button className="text-light">Go Home</Button></NavLink>            
            </ButtonGroup>
            </div>
        </div>
    )
}

export default ProjectsCard
