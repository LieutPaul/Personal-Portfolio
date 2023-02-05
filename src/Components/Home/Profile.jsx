import React from "react";
import Typical from "react-typical"
import './Profile.css'
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';

export default function Profile(){
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                
                    <div className="socials">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/VKas_17">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/vkas_13/">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vikas-kalyanapuram-57108b24a/">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LieutPaul">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                    
                    <div className="profile-details-name">
                        <span className="primary-text">Hello, I am
                            <span className="hightlighted-text"> Vikas K</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                            "Student at IIITB 📓",
                                            1000,
                                            "Enthusiastic Developer 💻",
                                            1000,
                                            "MERN Stack Web Developer 😎",
                                            1000
                                    ]}
                                />
                            </h1>
                            <span className="profile-role">
                                Knack for building Applications with functional Backend and Frontend .
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <a href="Resume.pdf" download>
                            <Button variant="outline-secondary">Get Resume</Button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>

                </div>
            </div>
        </div>
    );
}