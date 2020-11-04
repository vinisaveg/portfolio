import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
    padding: Array<string>;
    margin?: Array<string>;
    buttonType: 'primary' | 'secondary';
}

export const Button = styled(motion.a)<ButtonProps>`
    padding: ${(props) => props.padding?.join(' ')};
    margin: ${(props) => props.margin?.join(' ')};
    background-color: ${(props) => props.theme.colors[props.buttonType]};
    color: ${(props) => props.theme.colors.text.white};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.textSize.small + 'px'};
    text-align: center;
    border-radius: 4px;
    outline: none;
    border: none;
    text-decoration: none;
    transition: opacity 150ms ease;
    opacity: 0.9;
    cursor: pointer;
    font-weight: bold;

    &&:hover {
        opacity: 1;
    }
`;
