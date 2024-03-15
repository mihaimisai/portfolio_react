import React from 'react'
import profilePhoto from '../assets/img/profile.jpeg'

function Hero() {
    return <section className="hero d-flex align-items-center"  id="home">

    <div className="container">
        <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center text-md-start text-center">
            <div className="col-6">
                <span className="hello px-5 py-2 fs-4 bg-danger">Hi!</span>
                <h1 className="pt-3 fw-bold">I am Mihai</h1>
                <h2 className="fw-light">a web developer</h2>
                
            </div>
            <div className="col-12 col-md-6 pb-md-0 pb-5 d-flex justify-content-center"> 
                <div className="container img-frame">
                    <img className="img-fluid img-profile" src={profilePhoto} alt="profile" />
                </div>
                    
            </div>
        </div>
    </div>

</section>

}

export default Hero