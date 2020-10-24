import styled from 'styled-components';
import { motion } from 'framer-motion';
interface WrapperProps {
    width: string;
    height: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    margin?: string;
    padding?: Array<string>;
}

export const Wrapper = styled(motion.div)<WrapperProps>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.padding?.join(' ')};
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;
