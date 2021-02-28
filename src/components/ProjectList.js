import Project from "./Project"
import { productData } from "../data/projectData"


export default function ProjectList() {

    const test = productData.map(project => {
        return (
            <Project project={project} />
        )
    })
    return (
        <div className="projectList">
            {test}
        </div>
    )
}