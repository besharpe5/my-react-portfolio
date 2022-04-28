import React from "react";

function Resume() {
  return(
    <section className="my-5">
      <h2 className="text-center">My Resume</h2>
      <div className="resume">
        <a href="https://docs.google.com/document/d/1WKKmYoUm_mPNJeadYNW-yFXglXNkHrsOpHIUrh4YK3M/edit?usp=sharing" download>View my resume</a>
        <h3 className="text-center">My Skills and Experience</h3>
        <h4>Front-end</h4>
        <ul className="no-bullets">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>Handlebars.js</li>
        </ul>
        <h4>Back-end</h4>
        <ul className="no-bullets">
          <li>APIs</li>
          <li>Node.js</li>
          <li>npm</li>
          <li>Express</li>
          <li>MySQL and Sequelize</li>
          <li>MongoDB and Mongoose</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
          <li>Cookies, Local storage</li>
        </ul>
        <h4>Other</h4>
        <ul className="no-bullets">
            <li>Git</li>
            <li>ES5/ES6</li>
            <li>JSON</li>
            <li>Wordpress</li>
            <li>RegEx</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;