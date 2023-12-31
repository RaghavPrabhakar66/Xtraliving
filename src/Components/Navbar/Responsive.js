import React, { useState } from 'react'
import "./Responsive.css"
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom'
function Responsive({close}) {
  const [project, setProject] = useState(false);
  const OpenmyPro=()=>{
    setProject(!project)
    console.log(project)
  }
  const Close=()=>{
    close()
  }
  return (
  <div className='responsive'>
    <ul >
    <Link to="/"><li onClick={Close}>Home</li></Link>
     <li onClick={OpenmyPro}>Human Performance Projects<span style={{ color:"#ED5009",display: project? "none": "flex"  }}>
      <IoIosArrowDown/></span>  
      <span style={{display: project? "flex" : "none"}}><IoIosArrowUp/></span>
       </li>
       {project &&(
        <div className='projects' >
     <Link to="/performance"> <li onClick={Close}>Leaders</li></Link>
   <Link to="/parents"> <li onClick={Close}>Parents</li></Link>
   <Link to="/athletes"> <li onClick={Close}>Athletes</li></Link>
   <Link to="/workshop"> <li onClick={Close}>Busy Professional</li> </Link>
   <Link to="/collaborate" ><li onClick={Close}>Collaborate</li> </Link>
   </div>    )}
    <Link to="/about"><li onClick={Close} >About</li> </Link>
  <Link to="/media"><li onClick={Close}>Media</li></Link>
   <Link to="/blogs"> <li onClick={Close}>Blogs</li></Link>
   
       </ul>
  </div>
  )
}

export default Responsive
