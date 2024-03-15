import React from "react"

const skillsList = ['HTML', 'CSS', 'Javascript', 'React', 'Bootstrap', 'MySQL', 'MongoDB', 'Python', 'Flask']

function Skills() {
    return <section id="skills" className="p-5">
    <div className="container">
        <div className="pt-5">
            <h2 className="fw-bold">skills</h2>
        </div>
    
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 text-center justify-content-center pt-5 pb-5">
            {skillsList.map((skill, index) => (
                <div className="col py-3" key={index}>
                    <h3>{skill}</h3>
                 </div>
            ))}
            
        </div>

    </div>
</section>
}

export default Skills