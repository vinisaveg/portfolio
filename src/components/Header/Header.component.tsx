import React, { FunctionComponent, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { Wrapper } from '../../styles/shared/Wrapper';
import {
    MenuWrapper,
    MenuOfLinks,
    MenuOfIcons,
    MenuItem,
    MenuItemLink,
    MenuItemIcon,
    MenuToggleButton,
} from './styles';

import BehanceIcon from '../../assets/icons/behance-icon.svg';
import GithubIcon from '../../assets/icons/github-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { innerWidth: width } = window;

    const menuControls = useAnimation();

    const toggleMenu = async () => {
        if (isMenuOpen) {
            await menuControls.start({
                y: -900,
                transition: { duration: 0.35 },
            });
            setIsMenuOpen(!isMenuOpen);
        } else {
            setIsMenuOpen(!isMenuOpen);
            menuControls.start({
                y: 0,
                transition: { duration: 0.35 },
            });
        }
    };

    const toggleIconVariants = {
        open: { fill: '#6875E5' },
        closed: { fill: '#ffffff' },
    };

    const closeMenuWhenNavigateOnMobile = () => {
        if (width > 540) {
            return;
        }

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Wrapper
            width="100%"
            height="100px"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
        >
            <MenuWrapper
                initial={width > 540 ? { y: 0 } : { y: -900 }}
                isOpen={isMenuOpen}
                animate={menuControls}
            >
                <MenuOfLinks>
                    <MenuItem>
                        <MenuItemLink
                            onClick={closeMenuWhenNavigateOnMobile}
                            href="#mywork"
                        >
                            My work
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink
                            onClick={closeMenuWhenNavigateOnMobile}
                            href="#aboutme"
                        >
                            About me
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink
                            onClick={closeMenuWhenNavigateOnMobile}
                            href="#contact"
                        >
                            Contact
                        </MenuItemLink>
                    </MenuItem>
                </MenuOfLinks>

                <MenuOfIcons>
                    <MenuItem>
                        <MenuItemLink
                            target="_blank"
                            href="https://www.behance.net/viniciussilva3"
                            margin={['0px', '8px']}
                        >
                            <MenuItemIcon src={BehanceIcon} />
                        </MenuItemLink>
                        <MenuItemLink
                            target="_blank"
                            href="https://www.instagram.com/vsgdesigner/"
                            margin={['0px', '8px']}
                        >
                            <MenuItemIcon src={InstagramIcon} />
                        </MenuItemLink>
                        <MenuItemLink
                            target="_blank"
                            href="https://github.com/vinisaveg"
                            margin={['0px', '8px']}
                        >
                            <MenuItemIcon src={GithubIcon} />
                        </MenuItemLink>
                    </MenuItem>
                </MenuOfIcons>
            </MenuWrapper>

            <MenuToggleButton
                onClick={toggleMenu}
                width="43"
                height="22"
                viewBox="0 0 43 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={isMenuOpen ? 'open' : 'closed'}
            >
                <motion.path
                    d="M0.586146 16.8604C3.12986 19.0422 6.01288 21.5153 11.5895 21.5153C17.1663 21.5152 20.0495 19.0422 22.5933 16.8604C24.999 14.7971 27.0766 13.015 31.41 13.015C35.7435 13.015 37.8211 14.7971 40.2267 16.8604C40.9309 17.4643 41.9913 17.3832 42.5952 16.6791C43.1991 15.9749 43.118 14.9145 42.4138 14.3106C39.87 12.1287 36.9868 9.65564 31.41 9.65564C25.8332 9.65564 22.95 12.1286 20.4062 14.3106C18.0006 16.3739 15.923 18.156 11.5895 18.156C7.25619 18.156 5.17883 16.374 2.77335 14.3106C2.06923 13.7066 1.00884 13.7877 0.404823 14.4919C-0.199192 15.196 -0.117979 16.2565 0.586146 16.8604Z"
                    fill="white"
                    variants={toggleIconVariants}
                />

                <motion.path
                    d="M0.586146 7.67315C3.12978 9.85507 6.0128 12.3281 11.5895 12.3281C17.1663 12.3281 20.0495 9.85507 22.5933 7.67315C24.999 5.60982 27.0765 3.82776 31.41 3.82776C35.7433 3.82776 37.821 5.60974 40.2267 7.67315C40.9309 8.27725 41.9912 8.19587 42.5951 7.49166C43.1991 6.78754 43.1178 5.72698 42.4136 5.12313C39.8698 2.94122 36.9867 0.468384 31.41 0.468384C25.8332 0.468384 22.95 2.94139 20.4062 5.1233C18.0006 7.18663 15.923 8.9687 11.5895 8.9687C7.25627 8.9687 5.17883 7.18671 2.77335 5.1233C2.06923 4.51929 1.00876 4.60042 0.404823 5.30463C-0.199192 6.00875 -0.117979 7.06922 0.586146 7.67315Z"
                    fill="white"
                    variants={toggleIconVariants}
                />
            </MenuToggleButton>
        </Wrapper>
    );
};

export default Header;
