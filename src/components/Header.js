import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-white fs-3 fw-bold fst-italic me-5" to="#">CORONA-VIRUS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white fs-5 fw-bold" aria-current="page" to="#">Home</a>
        <a className="nav-link text-white fs-5 fw-bold" to="#">About</a>
        <a className="nav-link text-white fs-5 fw-bold" to="#">Contact</a>
    </div>
    
    </div>
  </div>
</nav>
  )
}
