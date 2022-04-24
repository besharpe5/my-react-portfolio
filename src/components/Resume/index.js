import React from "react";

function Resume() {
  return(
    <section className="my-5">
      <h3>Resume</h3>
      <div className="resume">
        <a href="" download>View my resume</a>
        <h2></h2>
        <h4>Front-end</h4>
        <ul>
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
        <ul>
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
        <ul>
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