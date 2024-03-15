import React from "react";

function ProjectCard({project}) {

    const { name, image, description, skills, buttons } = project

    return <div className="col">
    <div className="card text-bg-dark border-light h-100">
        <div className="ratio ratio-16x9">
            <img src={image} alt={name} className="h-100" />
        </div>
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-text pt-4">{description}</p>
        </div>
        <div className="card-body p-5 row text-center align-content-end">
            {skills.map((skill, index) => (
                <div className="col" key={index}>
                <h3>{skill}</h3>
            </div>
            ))}
            
        </div>
        <div className="card-body d-flex flex-row align-items-end justify-content-start">
            {buttons.map((button, index)=>(
                <a href={button.url} target="_blank" className="btn btn-primary mx-1" key={index} rel="noopener noreferrer">
                    {button.label}
                </a>
            ))}
            
        </div>
    </div>
</div>
}

export default ProjectCard