import React from "react"
import ProjectCard from "./ProjectCard"
import ProjectsList from "./ProjectList"

function Projects() {
    return <section id="projects" className="p-md-5 bg-dark text-bg-dark">
    <div className="container">
        <div className="pt-5 px-5 px-md-0">
            <h2 className="fw-bold">projects</h2>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 py-5 g-4">
        {ProjectsList.slice().reverse().map((project, index) => (
                        <ProjectCard key={index} project={project} />
        ))}
        </div>
    </div>
</section>
}

export default Projects