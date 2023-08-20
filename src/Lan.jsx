import React from 'react';
import { NavLink } from 'react-router-dom';

const Lan = (props) => {
  return (
    <>
  <div className='col-md-4 col-10 mx-auto'>
  
    <div className="card">
    <img src={props.Gimage}className="card-img-top"  alt={props.Gimage}/>
  <div className="card-body">
    <h5 className="card-title">{props.Gname}</h5>
    <p className="card-text">{props.AboutG}.</p>
    <NavLink to={props.link} className="btn-get-started">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Lets Go
    </NavLink>
  </div>
</div>
</div>

    
    
    </>
  )
}

export default Lan