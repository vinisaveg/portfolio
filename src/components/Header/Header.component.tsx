import React, { FunctionComponent, useState } from 'react';

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
import MenuToggleButtonIcon from '../../assets/icons/menu-icon.svg';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = async () => {
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
            <MenuWrapper isOpen={isMenuOpen}>
                <MenuOfLinks>
                    <MenuItem>
                        <MenuItemLink>My work</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>About me</MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>Contact</MenuItemLink>
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
            <MenuToggleButton src={MenuToggleButtonIcon} onClick={toggleMenu} />
        </Wrapper>
    );
};

export default Header;
