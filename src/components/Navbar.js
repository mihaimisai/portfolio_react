import React from 'react'

function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <h3 className="navbar-brand"><span className="text-secondary">iam</span>Mihai</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Access Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navmenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About Me</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a> 
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
}

export default Navbar