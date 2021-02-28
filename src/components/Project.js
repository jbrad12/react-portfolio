

export default function Project({ project }) {
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.img} />
            <h3>{project.description}</h3>
            <a href="" >{project.name}</a>
        </div>
    )
}