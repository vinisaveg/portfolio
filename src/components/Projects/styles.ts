import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Wrapper } from '../../styles/shared/Wrapper';

import farfetchProject from '../../assets/images/farfetch-project.png';
import goventuresProject from '../../assets/images/goventures-project.png';

export const ProjectsWrapper = styled(Wrapper)`
    @media only screen and (max-width: 1280px) {
        padding: 60px 0px;
    }
`;

interface ProjectCardProps {
    width: string;
    height: string;
    margin?: Array<string>;
    backgroundColor?: string;
}

export const ProjectCard = styled(motion.div)<ProjectCardProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin?.join(' ')};
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    &&:first-child {
        background-image: url('${goventuresProject}');
    }

    &&:last-child {
        background-image: url('${farfetchProject}');
        background-size: cover;
    }

    @media only screen and (max-width: 1280px) {
        width: 90%;
        height: 250px;
        transform: translateY(0) !important;
        margin: 15px 0px;
        border-radius: 8px;
        box-shadow: none;
        background-position: top center !important;

        && {
            background-size: 100%;
        }
    }
`;
