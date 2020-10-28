import React, { FunctionComponent } from 'react';

import { Wrapper } from '../../styles/shared/Wrapper';
import { Text } from '../../styles/shared/Text';
import { LogoIcon } from './styles';
import { motion } from 'framer-motion';

const Welcome: FunctionComponent = () => {
    return (
        <Wrapper
            width="100%"
            height="auto"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin={['60px', '0px']}
            padding={['0px', '15px']}
        >
            <Text
                fontSize="medium"
                fontFamily="primary"
                color="white"
                fontWeight={500}
                textAlign="center"
            >
                Welcome, I'm
            </Text>

            <Text
                fontSize="big"
                fontFamily="secondary"
                color="white"
                fontWeight={600}
                margin={['15px', '0px']}
                textAlign="center"
                style={{ textTransform: 'uppercase' }}
            >
                Vinicius Savegnago
            </Text>

            <Text
                fontSize="medium"
                fontFamily="primary"
                color="white"
                fontWeight={500}
                textAlign="center"
            >
                Software Developer & UI Designer
            </Text>

            <LogoIcon
                width="69"
                height="34"
                viewBox="0 0 69 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M0.938662 26.2505C5.01221 29.7445 9.62911 33.7049 18.5596 33.7049C27.4904 33.7048 32.1076 29.7445 36.1813 26.2505C40.0337 22.9462 43.3608 20.0924 50.3004 20.0924C57.2402 20.0924 60.5673 22.9462 64.4196 26.2505C65.5473 27.2176 67.2454 27.0877 68.2126 25.9601C69.1797 24.8324 69.0498 23.1342 67.9221 22.1671C63.8484 18.6731 59.2312 14.7126 50.3004 14.7126C41.3696 14.7126 36.7525 18.673 32.6788 22.1671C28.8263 25.4713 25.4992 28.3252 18.5596 28.3252C11.6202 28.3252 8.29345 25.4715 4.44128 22.1671C3.31369 21.2 1.61557 21.3297 0.64829 22.4575C-0.318989 23.5851 -0.188934 25.2833 0.938662 26.2505Z"
                    fill="#5DEE9F"
                />

                <motion.path
                    d="M0.938662 11.5378C5.01207 15.032 9.62898 18.9923 18.5596 18.9923C27.4904 18.9923 32.1076 15.032 36.1813 11.5378C40.0337 8.23357 43.3607 5.37975 50.3004 5.37975C57.2399 5.37975 60.567 8.23344 64.4196 11.5378C65.5473 12.5052 67.2453 12.3749 68.2124 11.2472C69.1797 10.1196 69.0494 8.42119 67.9218 7.45418C63.8481 3.96003 59.2309 0 50.3004 0C41.3696 0 36.7525 3.9603 32.6788 7.45445C28.8263 10.7587 25.4992 13.6125 18.5596 13.6125C11.6203 13.6125 8.29345 10.7588 4.44128 7.45445C3.31369 6.48717 1.61543 6.61709 0.64829 7.74482C-0.318989 8.87242 -0.188934 10.5707 0.938662 11.5378Z"
                    fill="#6875E5"
                />
            </LogoIcon>
        </Wrapper>
    );
};

export default Welcome;
