import React from "react";
import {Link} from "react-router-dom";

//link components using react dom
//also this method can be used
//<a className="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>

//Instead of class, className is used in jsx
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"red"}}>Navigation Bar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        

          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000/add">Create Student</a>
        </li>
         </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;