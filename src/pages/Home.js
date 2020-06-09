import React from "react";
import dcResume from "../images/Dillon_Couchois_2020.pdf";
import ProfileImage from "../images/headshot.JPG";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Mailto from "react-protected-mailto";
import "./Home.css";


function HomePage() {
    return (
        <div>
            <div className="about-content">
                <p className="lat-text">33.979600</p>
                <p className="long-text">-117.727220</p>
                <div>
                    <img src={ProfileImage} alt="cat" className="main-image"></img>
                </div>
                <div className="main-content">
                    <Row className="justify-content-md-center">
                        <p className="main-name">DILLON COUCHOIS</p>
                        <Col className="main-body" xs={6} md={10}>
                            <p>
                                Front-End Web Developer with a background in Photography and Design with a keen eye for detail.
                                Recently received a certificate in Full Stack Development from the University of California Irvine in Javascript, CSS, React.js and responsive web design.
                                My aim is to bring a dynamic experience to each user accompanied by modern and compelling design.
                        </p>
                            <p className="contact-title"> CONTACT </p>
                            <div className="c-links">
                                <a href={dcResume} target="_blank" rel="noopener noreferrer" className="c-btn"> Resume </a>
                                | |
                            <a href="https://www.linkedin.com/in/dillon-couchois-45b2bb163/" target="_blank" rel="noopener noreferrer" className="c-btn"> LinkedIn </a>
                                | |
                            <a href="https://github.com/dcouchois" target="_blank" rel="noopener noreferrer" className="c-btn"> Github </a>
                                | |
                            <p>
                                    Email: <Mailto className="c-btn"
                                        email="dcouchois@gmail.com"
                                        headers={
                                            { subject: "No Subject" }
                                        } />
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="color-block"></div>
            </div>
            <div className="project-content">
                <p className="p-title">
                    PROJECTS
                </p>
                <div>
                    <a href="https://dcouchois.github.io/BreachTheSummit/" target="_blank" rel="noopener noreferrer" className="bts-title">BREACH THE SUMMIT</a>
                </div>
                <div className="bts-content">
                    <Row className="justify-content-md-center">
                        <Col className="bts-body" xs={6} md={10}></Col>
                        <h3>Summary</h3>
                        <p>
                            Breach the Summit is a simple and intuitive way to find the top ranked hiking trails in your area.
                            Simply put in the city and state of the desired area you want to find trails in and hover over the icons to inspect the trail's stats.
                            </p>
                        <h3>Languages Used</h3>
                        <ul>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>JQUERY</li>
                            <li>Materialize</li>
                            <li>CSS</li>
                            <li>AJAX</li>
                            <li>Google Maps API</li>
                        </ul>
                    </Row>
                </div>
                <div>
                    <a href="https://lit-sierra-81900.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="brew-title">CRUISIN FOR A BREWSIN</a>
                </div>
                <div className="brew-content">
                    <Row className="justify-content-md-center">
                        <Col className="brew-body" xs={6} md={10}></Col>
                        <h3>Summary</h3>
                        <p>
                            Cruisin' for a Brewsin' allows the user to search and locate breweries in their area.
                            After the search, you can save any brewery you want to look up later! Cheers!
                            </p>
                        <h3>Languages Used</h3>
                            <ul>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>JQUERY</li>
                                <li>Bootstrap</li>
                                <li>CSS</li>
                                <li>AJAX</li>
                                <li>Google Maps API</li>
                                <li>MySQL</li>
                        </ul>
                    </Row>
                </div>
                <div>
                    <a href="https://gentle-atoll-31544.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="beat-title">ICE COLD BEATZ</a>
                </div>
                <div className="beat-content">
                    <Row className="justify-content-md-center">
                        <Col className="beat-body" xs={6} md={10}></Col>
                        <h3>Summary</h3>
                        <p>
                            Ice Cold Beatz is the premiere way to create music on the go for programmers. Need to get that song laid out and saved later?
                            Save it to our database and recall it when you need it! No equipment needed, everything you need is already built into the keyboard!
                            Enjoy!
                        </p>
                        <h3>Languages Used</h3>
                            <ul>
                                <li>React</li>
                                <li>React Bootstrap</li>
                                <li>CSS</li>
                                <li>AXIOS</li>
                                <li>MONGO DB</li>
                            </ul>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default HomePage;