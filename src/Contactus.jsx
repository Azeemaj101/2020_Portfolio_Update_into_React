import React from 'react';
import { useHistory } from 'react-router';

const Contactus = () => {
    let history = useHistory();
      
        function handleClick() {
          history.push("/");
        }
    return (
        <div>
             <p className="fs-1 fw-bold text-center">Contact Us</p>
             <div class="card m-3">
                <div class="card-header fw-bold fs-4">
                Information
                </div>
                <div class="card-body">
                    <h5 class="card-title">About Me:</h5>
                    <p class="card-text">Hello! I'm a student of Computer science, passionate about learning and exploring technology in the modern era, Lahore PK.
                    <br/>
                    A Web Developer with a good grip on basic front-end development tools including HTML, CSS, Bootstrap, Javascript and ReactJS along with a strong grip on back-end frameworks NodeJS, Express, PHP, MySQL and MongoDB with extensive hands-on experience contributing to open-source codes. I'm also working on Machine Learning and training many datasets. Having a strong background in project management and excellent communication skills. I work on a variety of interesting and meaningful projects.

                    I'm still studying for my undergraduate degree at Lahore Garrison University and have also done my first internship at W-Group in AI.</p>
                    <h5 class="card-title">Contact Me:</h5>
                    <p class="card-text">My Number = 03244064060 <br/>
                    My Email = Azeemaj101@Gmail.com<br/>
                    My Email = Azeemaj101@Hotmail.com.</p>
                    <a href="mailto:azeemaj101" class="btn btn-outline-success">Click For Email</a>
                </div>
                </div>
                <div className="text-center mb-2">
            <button type="button" className="btn btn-outline-danger rounded-pill" onClick={handleClick}>Go home</button>
            </div>
        </div>
        
    )
}

export default Contactus;