import React, { FunctionComponent } from 'react';

import { Button } from '../../styles/shared/Button';
import { Text } from '../../styles/shared/Text';
import { Wrapper } from '../../styles/shared/Wrapper';

import { MyWorkWrapper } from './styles';

const MyWork: FunctionComponent = () => {
    return (
        <MyWorkWrapper
            width="100%"
            height="auto"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            backgroundColor="#fafafa"
            padding={['60px', '160px']}
        >
            <Wrapper
                width="100%"
                maxWidth="1200px"
                height="auto"
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-around"
                backgroundColor="transparent"
            >
                <Text
                    color="black"
                    fontFamily="secondary"
                    fontSize="title"
                    fontWeight={600}
                    maxWidth={180}
                    className="checkout-text"
                >
                    Check out my work
                </Text>

                <Button
                    target="_blank"
                    href="https://www.instagram.com/vsgdesigner/"
                    buttonType="primary"
                    padding={['12px', '42px']}
                >
                    See here
                </Button>
            </Wrapper>
        </MyWorkWrapper>
    );
};

export default MyWork;
