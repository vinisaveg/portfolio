import React, { FunctionComponent } from 'react';

import { Button } from '../../styles/shared/Button';
import { Text } from '../../styles/shared/Text';

import { MyWorkWrapper } from './styles';

const MyWork: FunctionComponent = () => {
    return (
        <MyWorkWrapper
            width="100%"
            height="auto"
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-around"
            backgroundColor="#fafafa"
            padding={['60px', '160px']}
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

            <Button buttonType="primary" padding={['12px', '42px']}>
                See here
            </Button>
        </MyWorkWrapper>
    );
};

export default MyWork;
