import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
    color: 'white' | 'black';
}

export const Title = styled(motion.h2)<TitleProps>`
    color: ${(props) =>
        props.color === 'white'
            ? props.theme.colors.text.white
            : props.theme.colors.text.black};
    font-size: ${(props) => props.theme.textSize.title + 'px'};
    font-weight: bold;
`;
