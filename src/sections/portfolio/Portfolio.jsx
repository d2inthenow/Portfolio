import './portfolio.css'
import Projects from './Projects'
import { useState } from 'react'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
const Portfolio = () => {
    const [projects, setProjects] = useState(data)
    const categories = data.map(item => item.category)
    const uniqueCatagories = ['all', ...new Set(categories)]
    const filterProjectsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }

        const filterProjects = data.filter(project => project.category === category);
        setProjects(filterProjects);
    }

    return (
        <section id="portfolio">
            <h2>My Project</h2>
            <p>Some projects I did when I was in school </p>
            <div className="portfolio-container">
                <ProjectsCategories categories={uniqueCatagories} onFilterProjects={filterProjectsHandler} />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Portfolio