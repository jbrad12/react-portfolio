

export default function Project({ project }) {
    return (
        <div className="project">
            <h1 className="text">{project.name}</h1>
            <img src={project.img} />
            <h3 className="text">{project.description}</h3>
            <a href={project.href} >{project.name}</a>
        </div>
    )
}