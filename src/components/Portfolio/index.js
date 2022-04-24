import React from 'react';
import Project from '../Project';
import projects from '../../projects.json';

const Portfolio = () => {
  return (
    <section className="my-5">
    <h3>My Portfolio</h3>
    
    <div className='container flex-row center'>
      {projects.map((project) => (
        <Project key={project.id} image={project.image} name={project.name} github={project.github} deployed={project.deployed} description={project.description}/>

      ))}
    </div>
  </section>
  )
}

export default Portfolio;