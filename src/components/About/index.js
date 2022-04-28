import React from 'react';
import profilepic from '../../assets/images/clayhousephotography-indiana-photographer-ritz-charles-Sharpe-FirstLook-91.png'; //

function About() {
    return (
        <section className="my-5">
            <h3 id="about" className="text-center">About Me</h3>
            <div className="bio">
                <img src={profilepic} className="profilepic" alt="my profile" />
                <p>Lorem ipsum dolor sit amet. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet.</p>
            </div>
        </section>
    );
}

export default About;