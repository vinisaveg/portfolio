import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
    padding: Array<string>;
    margin?: Array<string>;
    primary?: boolean;
}

export const Button = styled(motion.button)<ButtonProps>`
    padding: ${(props) => props.padding?.join(' ')};
    margin: ${(props) => props.margin?.join(' ')};
    background-color: ${(props) =>
        props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text.white};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.textSize.small + 'px'};
    border-radius: 4px;
    outline: none;
    border: none;
    transition: opacity 150ms ease;
    opacity: 0.9;
    cursor: pointer;

    font-weight: bold;

    &&:hover {
        opacity: 1;
    }
`;
