import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MenuWrapperProps {
    isOpen?: boolean;
}

export const MenuWrapper = styled(motion.nav)<MenuWrapperProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;

    @media only screen and (max-width: 540px) {
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
        position: fixed;
        top: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.colors.secondary};
        width: 100%;
        height: 100%;
        overflow: hidden;
        flex-direction: column;
        scroll-behavior: none;
    }
`;

export const MenuOfIcons = styled(motion.ul)`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 540px) {
        flex-direction: column;
    }
`;

export const MenuOfLinks = styled(MenuOfIcons)`
    ::after {
        content: '';
        width: 1px;
        height: 25px;
        background-color: #575757;
        margin: 0px 25px;
    }

    @media only screen and (max-width: 540px) {
        ::after {
            background-color: #fff;
            margin: 25px 0px;
            height: 80px;
        }
    }
`;

export const MenuItem = styled.li`
    @media only screen and (max-width: 540px) {
        margin: 25px 0px;
    }
`;

interface MenuItemLinkProps {
    margin?: Array<string>;
}

export const MenuItemLink = styled.a<MenuItemLinkProps>`
    color: ${(props) => props.theme.colors.text.white};
    font-size: ${(props) => props.theme.textSize.small + 'px'};
    font-weight: 600;
    text-decoration: none;
    margin: ${(props) => props.margin?.join(' ') || '0px 25px'};
    cursor: pointer;
    transition: opacity 150ms ease;
    opacity: 0.8;

    &&:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 540px) {
        margin: 15px;
    }
`;

export const MenuItemIcon = styled(motion.svg)`
    width: 21px;
`;

export const MenuToggleButton = styled(motion.svg)`
    position: absolute;
    top: 40px;
    right: 40px;
    display: none;
    z-index: 101;
    cursor: pointer;

    @media only screen and (max-width: 540px) {
        display: block;
    }
`;
