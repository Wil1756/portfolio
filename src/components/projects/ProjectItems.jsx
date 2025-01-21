import React from 'react';

const ProjectItems = ({ item }) => {
    return (
        <div className='project__card' key={item.id}>
            <div className="project__img-container">
                <img src={item.img} alt={item.title} className="project__img" />
            </div>
            
            <div className="project__content">
                <h3 className="project__title">{item.title}</h3>
                
                <p className="project__description">
                    {item.description}
                </p>

                <div className="project__tech-container">
                    {item.technologies.join(' · ')}
                </div>

                <a href={item.github} 
                   target="_blank" 
                   rel="noreferrer" 
                   className="project__button"
                >
                    View on GitHub <i className="bx bxl-github project__button-icon"></i>
                </a>
            </div>
        </div>
    );
}

export default ProjectItems;