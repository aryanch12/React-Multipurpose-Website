import React from 'react';
import Laata from "./Laata";
import Lan from './Lan';


const Home = () => {
  return (
    <>
     <div className="my-5">
       <h1 className="text-center">Our <strong className="brand-name"> Services</strong></h1>
    </div>
     <div className="container-fluid mb-5">
      <div className="row">
         <div className="col-10 mx-auto">
          <div className="row gy-4">  
    {
       Laata.map((val,ind)=>{
        return <Lan key={ind}
        Gimage={val.Gimage}
        Gname={val.Gname}
        link={val.link}
        AboutG={val.AboutG}
        />
       }) 
    }
       </div> 
         </div>
       </div>
     </div>
    
    </>
  )
}

export default Home