import React, { FunctionComponent } from 'react';
import { ProjectCard, ProjectsWrapper } from './styles';

import velaProject from '../../assets/images/vela-project.png';

const Projects: FunctionComponent = () => {
    const projectMiddleCardVariants = {
        from: {
            y: 600,
            opacity: 0,
        },
        to: {
            y: 100,
            opacity: 1,
        },
    };

    const projectOtherCardsVariants = {
        from: {
            y: 500,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <ProjectsWrapper
            width="100%"
            height="100%"
            flexDirection="row"
            alignItems="baseline"
            justifyContent="center"
            flexWrap="wrap"
        >
            <ProjectCard
                variants={projectOtherCardsVariants}
                initial="from"
                animate="to"
                transition={{ type: 'spring', stiffness: 100, delay: 1 }}
                width="300px"
                height="300px"
                style={{
                    backgroundPosition: 'left',
                }}
            />
            <ProjectCard
                id="project"
                variants={projectMiddleCardVariants}
                initial="from"
                animate="to"
                transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                width="650px"
                height="500px"
                backgroundColor="#6875E5"
                style={{
                    borderRadius: '12px',
                    transform: 'translateY(100px)',
                    boxShadow: '0px 30px 30px rgba(32, 30, 30, 0.10)',
                    zIndex: 10,
                    backgroundImage: `url(${velaProject})`,
                }}
            />
            <ProjectCard
                variants={projectOtherCardsVariants}
                initial="from"
                animate="to"
                transition={{ type: 'spring', stiffness: 100, delay: 1 }}
                width="300px"
                height="300px"
            />
        </ProjectsWrapper>
    );
};

export default Projects;
