import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Wrapper } from '../../styles/shared/Wrapper';

export const ProjectsWrapper = styled(Wrapper)`
    @media only screen and (max-width: 1280px) {
        padding: 60px 0px;
    }
`;

interface ProjectCardProps {
    width: string;
    height: string;
    margin?: Array<string>;
    backgroundColor: string;
}

export const ProjectCard = styled(motion.div)<ProjectCardProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin?.join(' ')};
    background-color: ${(props) => props.backgroundColor};

    @media only screen and (max-width: 1280px) {
        width: 90%;
        height: 250px;
        transform: translateY(0) !important;
        margin: 15px 0px;
        border-radius: 8px;
        box-shadow: none;
    }
`;
