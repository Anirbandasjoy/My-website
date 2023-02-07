import React from 'react'
import { NavLink } from 'react-router-dom'




import "./workCardstyle.css"






const WorkCard = (props) => {

  return (
    <div className="project-card">
    <img  src={props.imgsrc} alt="img" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
     <p>{props.text}</p>

      <div className="pro-btns">
        <NavLink target="_blank" className="btn" to={props.view}>view</NavLink>
        <NavLink target="_blank" className="btn" to="facebook.com">Source</NavLink>
      </div>
    </div>
</div>
    
  )
}

export default WorkCard