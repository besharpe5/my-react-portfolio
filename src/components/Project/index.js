import React from 'react';
import { ImgOverlay } from 'image-overlay-react';
import 'image-overlay-react/dist/index.css'
import { FaGithub } from 'react-icons/fa'

const Project = (props) => {

  return (
    <div className='my-2 mx-2'>
        <ImgOverlay 
          alt={props.name} 
          imgSrc={require(`../../assets/images/${props.image}.jpg`)}
          bgColor='#fefae0'
          position='right'
          width='375px'
          height='250px'
          fSize='10px'
          fColor='#283618'
        >
          <div>
            {<h4 className='cardText'><a href={props.deployed}>{props.name}</a></h4>}
            {<p>{props.description}</p>}
            <a className='icon' href={props.github}><FaGithub style={{ fontSize: '45px'}} /></a>

          </div>
        </ImgOverlay>
    </div>
  )
}

export default Project;