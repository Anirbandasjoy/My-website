import React from 'react'
import { NavLink } from 'react-router-dom'





import "./workCardstyle.css"





const WorkCard = (props) => {

  return (
    <div className="project-card">
   <h4 className="project-title">{props.title}</h4>
    <img  src={props.imgsrc} alt="img" />
   
    <div className="pro-details">
     {/* <p>{props.text}</p> */}

      <div className="pro-btns">
        <NavLink target="_blank" className="btn otherbtn" to={props.view}><i class="fa-solid fa-eye"></i></NavLink>
        <NavLink target="_blank" className="btn otherbtn" to="facebook.com"><i class="fa-brands fa-sourcetree"></i></NavLink>
      </div>
    </div>
</div>
    
  )
}

export default WorkCard