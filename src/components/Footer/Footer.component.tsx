import React, { FunctionComponent } from 'react';
import { Wrapper } from '../../styles/shared/Wrapper';
import { LogoIcon } from './styles';

import Logo from '../../assets/logo/logo.svg';

const Footer: FunctionComponent = () => {
    return (
        <Wrapper
            width="100%"
            height="80px"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
        >
            <LogoIcon src={Logo} alt="My personal logo" />
        </Wrapper>
    );
};

export default Footer;
