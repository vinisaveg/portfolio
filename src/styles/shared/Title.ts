import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
    color: 'white' | 'black';
    margin?: Array<string>;
}

export const Title = styled(motion.h2)<TitleProps>`
    color: ${(props) => props.theme.colors.text[props.color]};
    font-size: ${(props) => props.theme.textSize.title + 'px'};
    margin: ${(props) => props.margin?.join(' ')};
    font-weight: bold;
`;
