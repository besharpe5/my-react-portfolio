import React from 'react';
import profilepic from '../../assets/images//Users/bensharpe/my-react-portfolio/src/assets/images/clayhousephotography-indiana-photographer-ritz-charles-Sharpe-FirstLook-91.png'; //

function About() {
    return (
        <section className="my-5">
            <h3 id="about">About Me</h3>
            <div className="bio">
                <img src={profilepic} className="profilepic" alt="my profile picture" />
                <p>Lorem ipsum dolor sit amet. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    );
}

export default About;