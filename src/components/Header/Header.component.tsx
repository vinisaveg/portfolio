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

    const socialIconsVariants = {
        desktop: { fill: '#5DEE9F' },
        mobile: { fill: '#6875E5' },
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
                            href="https://www.behance.net/vinisaveg"
                            margin={['0px', '8px']}
                            aria-label="Go to my behance profile"
                        >
                            <MenuItemIcon
                                width="40"
                                height="40"
                                viewBox="0 0 41 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={width > 540 ? 'desktop' : 'mobile'}
                                variants={socialIconsVariants}
                            >
                                <motion.path d="M16.2083 14.3642H15.6462H11.899V17.7991H15.9273C16.6455 17.7991 17.27 17.6118 17.27 15.9567C17.27 14.3017 16.2083 14.3642 16.2083 14.3642Z" />

                                <motion.path d="M16.2083 20.2972H11.899V24.6689H15.6774C15.7399 24.6689 15.8336 24.6689 15.9585 24.6689C16.583 24.6689 17.7696 24.4191 17.7696 22.5455C17.8008 20.3284 16.2083 20.2972 16.2083 20.2972Z" />

                                <motion.path d="M30.4476 0H10.8374C5.404 0 0.969849 4.43416 0.969849 9.86756V29.509C0.969849 34.9112 5.404 39.3453 10.8374 39.3453H30.4788C35.9122 39.3453 40.3464 34.9112 40.3464 29.4778V9.86756C40.3152 4.43416 35.881 0 30.4476 0ZM24.0774 12.4906H30.635V14.0519H24.0774V12.4906ZM21.0172 22.7641C21.0172 27.6354 16.2084 27.7915 16.2084 27.7915H11.7742H11.6493H8.4642V11.5538H11.6181H11.743H16.1771C18.5816 11.5538 20.4864 12.9278 20.4864 15.8006C20.4864 18.6734 18.1756 18.8295 18.1756 18.8295C21.2358 18.7983 21.0172 22.7641 21.0172 22.7641ZM32.7896 22.483H24.8893C24.8893 25.6057 27.5748 25.3559 27.5748 25.3559C30.1041 25.3559 30.0104 23.7321 30.0104 23.7321H32.6959C32.6959 28.1038 27.4811 27.9164 27.4811 27.9164C21.2358 27.9164 21.6418 21.7648 21.6418 21.7648C21.6418 21.7648 21.6418 15.582 27.4811 15.582C33.6327 15.5508 32.7896 22.483 32.7896 22.483Z" />

                                <motion.path d="M27.5435 17.8303C25.2015 17.8303 24.858 20.2972 24.858 20.2972H29.8543C29.8543 20.2972 29.8855 17.8303 27.5435 17.8303Z" />
                            </MenuItemIcon>
                        </MenuItemLink>
                        <MenuItemLink
                            target="_blank"
                            href="https://www.instagram.com/vinisavegdev/"
                            margin={['0px', '8px']}
                            aria-label="Go to my instagram profile"
                        >
                            <MenuItemIcon
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={width > 540 ? 'desktop' : 'mobile'}
                                variants={socialIconsVariants}
                            >
                                <motion.path d="M28.3593 0H11.6106C5.20849 0 0 5.20849 0 11.6106V28.3592C0 34.7614 5.20849 39.9699 11.6106 39.9699H28.3592C34.7614 39.9699 39.9699 34.7614 39.9699 28.3593V11.6106C39.9699 5.20849 34.7614 0 28.3593 0ZM36.8472 28.3592C36.8472 33.0395 33.0395 36.8472 28.3593 36.8472H11.6106C6.93032 36.8472 3.12265 33.0395 3.12265 28.3593V11.6106C3.12265 6.93032 6.93032 3.12265 11.6106 3.12265H28.3592C33.0395 3.12265 36.8472 6.93032 36.8472 11.6106V28.3592Z" />

                                <motion.path d="M19.9849 9.21179C14.0446 9.21179 9.21179 14.0446 9.21179 19.9849C9.21179 25.9253 14.0446 30.758 19.9849 30.758C25.9253 30.758 30.758 25.9253 30.758 19.9849C30.758 14.0446 25.9253 9.21179 19.9849 9.21179ZM19.9849 27.6354C15.7665 27.6354 12.3344 24.2034 12.3344 19.9849C12.3344 15.7665 15.7665 12.3344 19.9849 12.3344C24.2034 12.3344 27.6354 15.7665 27.6354 19.9849C27.6354 24.2034 24.2034 27.6354 19.9849 27.6354Z" />

                                <motion.path d="M30.9142 10.617C31.7765 10.617 32.4756 9.91794 32.4756 9.05565C32.4756 8.19335 31.7765 7.49432 30.9142 7.49432C30.0519 7.49432 29.3529 8.19335 29.3529 9.05565C29.3529 9.91794 30.0519 10.617 30.9142 10.617Z" />
                            </MenuItemIcon>
                        </MenuItemLink>
                        <MenuItemLink
                            target="_blank"
                            href="https://github.com/vinisaveg"
                            margin={['0px', '8px']}
                            aria-label="Go to my github profile"
                        >
                            <MenuItemIcon
                                width="40"
                                height="40"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={width > 540 ? 'desktop' : 'mobile'}
                                variants={socialIconsVariants}
                            >
                                <motion.path d="M13.7061 30.5535C13.4419 30.6027 13.3264 30.7267 13.3595 30.9244C13.3925 31.1222 13.5409 31.1884 13.8048 31.1222C14.069 31.0564 14.1843 30.9407 14.1511 30.7759C14.1184 30.5946 13.9699 30.5203 13.7061 30.5535Z" />

                                <motion.path d="M12.2959 30.7516C12.0319 30.7516 11.9 30.8418 11.9 31.0236C11.9 31.238 12.0403 31.3284 12.3205 31.2955C12.5845 31.2955 12.7165 31.2048 12.7165 31.0236C12.7165 30.8095 12.5763 30.7184 12.2959 30.7516Z" />

                                <motion.path d="M10.3662 30.6768C10.3003 30.8583 10.4076 30.9817 10.6878 31.048C10.9352 31.1465 11.0919 31.0972 11.1578 30.8995C11.2073 30.7183 11.1001 30.5866 10.8362 30.5036C10.5887 30.4379 10.4321 30.4948 10.3662 30.6768Z" />

                                <motion.path d="M35.9095 2.09031C34.5158 0.696857 32.838 0 30.8749 0H7.12497C5.16247 0 3.48411 0.696857 2.09031 2.09031C0.696857 3.48402 0 5.16239 0 7.12497V30.8753C0 32.838 0.696857 34.5161 2.09031 35.9096C3.48402 37.3033 5.16247 38.0002 7.12497 38.0002H12.6666C13.0292 38.0002 13.3015 37.9877 13.4829 37.9634C13.6642 37.9385 13.8455 37.8312 14.027 37.6413C14.2086 37.4518 14.2991 37.1755 14.2991 36.8128C14.2991 36.7636 14.2947 36.2022 14.2866 35.1303C14.2782 34.0579 14.2741 33.2087 14.2741 32.5818L13.7051 32.6809C13.3423 32.7467 12.8846 32.7757 12.332 32.7674C11.7797 32.7591 11.2064 32.7016 10.6127 32.5943C10.0187 32.4869 9.4664 32.2396 8.95507 31.8524C8.44399 31.4644 8.08118 30.9574 7.86672 30.3309L7.61924 29.7615C7.45434 29.3825 7.19473 28.9617 6.84006 28.5003C6.48539 28.0383 6.12674 27.7249 5.76393 27.56L5.59071 27.4362C5.47538 27.3538 5.36819 27.2544 5.26914 27.1391C5.17027 27.0234 5.0961 26.9078 5.04662 26.7928C4.99714 26.6771 5.03822 26.5822 5.17027 26.5078C5.30233 26.4337 5.54123 26.3969 5.88775 26.3969L6.38236 26.471C6.71233 26.5369 7.12029 26.7346 7.60711 27.0647C8.09357 27.3945 8.49347 27.8232 8.80689 28.3508C9.18643 29.0273 9.64369 29.5423 10.18 29.897C10.7158 30.252 11.2561 30.4293 11.8003 30.4293C12.3445 30.4293 12.8145 30.388 13.2105 30.3059C13.606 30.2232 13.9772 30.0992 14.3237 29.9343C14.4721 28.8294 14.8763 27.9795 15.5358 27.3859C14.5958 27.2868 13.7506 27.1386 12.9999 26.9405C12.2497 26.7424 11.4744 26.421 10.6746 25.9755C9.87445 25.5301 9.21069 24.978 8.68289 24.3179C8.15518 23.6578 7.72209 22.7919 7.38424 21.7202C7.04621 20.6479 6.87715 19.4108 6.87715 18.009C6.87715 16.0135 7.52886 14.3144 8.83176 12.9126C8.22138 11.4118 8.27901 9.72974 9.0048 7.86585C9.48312 7.71733 10.1925 7.82876 11.1325 8.19989C12.0726 8.57128 12.761 8.88886 13.1982 9.15237C13.6355 9.41597 13.9858 9.63884 14.2498 9.82046C15.7839 9.39162 17.3672 9.17724 18.9999 9.17724C20.6325 9.17724 22.216 9.39162 23.7502 9.82046L24.6903 9.22672C25.3338 8.83072 26.0923 8.46791 26.9666 8.1382C27.8407 7.8084 28.5086 7.71759 28.9706 7.86611C29.7125 9.73 29.7789 11.4121 29.1681 12.9128C30.471 14.3148 31.1229 16.0137 31.1229 18.0093C31.1229 19.4113 30.9538 20.6526 30.6158 21.7326C30.278 22.8129 29.8412 23.6791 29.3047 24.3305C28.7689 24.9821 28.1008 25.5301 27.301 25.9757C26.501 26.4208 25.7258 26.7428 24.9752 26.9403C24.2247 27.1384 23.3796 27.2873 22.4395 27.3863C23.2966 28.1282 23.7254 29.2989 23.7254 30.899V36.812C23.7254 37.0925 23.7663 37.3191 23.8487 37.4923C23.9318 37.6654 24.0635 37.7847 24.2448 37.8511C24.427 37.917 24.587 37.9581 24.7276 37.9745C24.8681 37.9911 25.0698 37.9994 25.3337 37.9994H30.8754C32.8379 37.9994 34.5163 37.3025 35.9094 35.9088C37.3031 34.5151 38 32.8367 38 30.8742V7.12497C37.9998 5.16239 37.303 3.48376 35.9095 2.09031Z" />

                                <motion.path d="M7.52075 27.6589C7.40541 27.7411 7.42188 27.873 7.57031 28.0545C7.73547 28.2193 7.86727 28.2442 7.96631 28.1286C8.08165 28.0464 8.06518 27.9145 7.91649 27.7327C7.75168 27.5845 7.61979 27.5596 7.52075 27.6589Z" />

                                <motion.path d="M6.70458 27.0404C6.65519 27.1561 6.7129 27.2551 6.8778 27.3372C7.0096 27.42 7.11713 27.4037 7.19937 27.288C7.24876 27.1723 7.19105 27.0733 7.02615 26.9905C6.86125 26.941 6.75406 26.9576 6.70458 27.0404Z" />

                                <motion.path d="M8.28797 28.6239C8.13936 28.706 8.13936 28.8549 8.28797 29.069C8.43641 29.2837 8.57635 29.3413 8.70849 29.2421C8.85701 29.1265 8.85701 28.9699 8.70849 28.7719C8.57669 28.558 8.43641 28.5079 8.28797 28.6239Z" />

                                <motion.path d="M9.15396 29.7367C9.00544 29.8689 9.03819 30.025 9.25292 30.207C9.45057 30.4045 9.61556 30.4294 9.74753 30.2806C9.87959 30.149 9.84657 29.9924 9.64857 29.811C9.45092 29.6134 9.28593 29.5884 9.15396 29.7367Z" />
                            </MenuItemIcon>
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
