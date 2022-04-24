import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container flex-row footer">
                <p className="mx-1">Created by Ben Sharpe</p>
                <a className="icon" href="https://github.com/bensharpe5"><FaGithub style={{ fontSize: "45px"}} /></a>
                <a className="icon" href="https://www.linkedin.com/in/bensharpe15/"><FaLinkedin style={{ fontSize: "45px"}} /></a>
                <a className="icon" href="https://twitter.com/bensharpe5"><FaTwitter style={{ fontSize: "45px"}} /></a>
            </div>
            <div>
            </div>
        </footer>
    );
};

export default Footer;