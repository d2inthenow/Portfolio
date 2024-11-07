import React from 'react'
import Card from '../../components/Card'


const Project = ({ project }) => {
    return (
        <Card className="portfolio__project">
            <div className="portfolio project__image">
                <img src={project.image} alt="Portfolio project img" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="portfolio__cta">
                <a href={project.demo} className='btn sm' target="_blank" rel="noreferrer">Demo</a>
                <a href={project.github} className='btn sm primary' target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </Card>

    )
}

export default Project