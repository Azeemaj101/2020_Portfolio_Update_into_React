import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import pic from './images/1_1.jpg';


const date = new Date();
const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div>
                        <img src={pic} className="rounded-circle footer-img" alt=""/>
                    </div>
                    <div className="footer_content">
                        <p>Muhammad Azeem</p>
                        <div>
                            <Tooltip title="Facebook">
                            <a href="https://www.facebook.com/Azeemaj101/" target="_blank" className="footer_btn" rel="noopener noreferrer"><FacebookRoundedIcon fontSize="large"/></a>
                            </Tooltip>
                            <Tooltip title="Github">
                            <a href="https://github.com/Azeemaj101" target="_blank" className="footer_btn" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></a>
                            </Tooltip>

                            <Tooltip title="Instagram">
                            <a href="https://www.instagram.com/azeemaj101/" target="_blank" className="footer_btn" rel="noopener noreferrer"><InstagramIcon fontSize="large"/></a>
                            </Tooltip>

                            <Tooltip title="LinkedIn">
                            <a href="https://www.linkedin.com/in/azeemaj101/" target="_blank" className="footer_btn" rel="noopener noreferrer"><LinkedInIcon fontSize="large"/></a>
                            </Tooltip>

                            <Tooltip title="Twitter">
                            <a href="https://twitter.com/Azeemaj101" target="_blank" className="footer_btn" rel="noopener noreferrer"><TwitterIcon fontSize="large"/></a>
                            </Tooltip>

                            <Tooltip title="Resume">
                            <a href="http://azeemaj101.herokuapp.com/partials/Azeem-CV.pdf" target="_blank" className="footer_btn" rel="noopener noreferrer"><DescriptionIcon fontSize="large"/></a>
                            </Tooltip>
                        </div>
                        <div className="text-center mt-2">
                        <Tooltip title="Email">
                        <a href="mailto:azeemaj101@gmail.com" className="footer_btn" style={{textDecoration:"none"}}>
                        <Button variant="outlined" color="success" className="text-light me-2 rounded-pill">Say Hello</Button></a>
                        </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="bg-light mb-3 mt-2 line">
                </div>
            <div className="d-flex justify-content-center align-items-center mb-1">
                ©️ 2020 - {date.getFullYear()} ~&nbsp; <a className="footer_link" href="http://azeemaj101.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Portfolio</a>
            </div>
            </div>
        </div>
    )
}

export default Footer
