import React, { FunctionComponent } from 'react';

import { Title } from '../../styles/shared/Title';
import { Wrapper } from '../../styles/shared/Wrapper';

import { Card, CardIcon, Icon } from './styles';
import { Text } from '../../styles/shared/Text';

import prototypeIcon from '../../assets/icons/prototype-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';
import rocketIcon from '../../assets/icons/rocket-icon.svg';

const Workflow: FunctionComponent = () => {
    return (
        <Wrapper
            width="100%"
            height="60vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            backgroundColor="#F5F5F5"
        >
            <Title color="black" margin={['160px', '0px', '60px', '0px']}>
                My workflow
            </Title>

            <Wrapper
                width="100%"
                height="auto"
                padding={['60px', '0px']}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
            >
                <Card>
                    <CardIcon>
                        <Icon src={prototypeIcon} alt="Prototype Icon" />
                    </CardIcon>

                    <Text
                        fontSize="medium"
                        color="white"
                        fontWeight={600}
                        fontFamily="secondary"
                        margin={['15px', '0px']}
                    >
                        Prototype
                    </Text>

                    <Text
                        fontSize="small"
                        color="white"
                        fontWeight={500}
                        fontFamily="primary"
                        maxWidth={180}
                        textAlign="center"
                    >
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Text>
                </Card>

                <Card>
                    <CardIcon>
                        <Icon src={codeIcon} alt="Prototype Icon" />
                    </CardIcon>

                    <Text
                        fontSize="medium"
                        color="white"
                        fontWeight={600}
                        fontFamily="secondary"
                        margin={['15px', '0px']}
                    >
                        Code
                    </Text>
                    <Text
                        fontSize="small"
                        color="white"
                        fontWeight={500}
                        fontFamily="primary"
                        maxWidth={180}
                        textAlign="center"
                    >
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Text>
                </Card>

                <Card>
                    <CardIcon>
                        <Icon src={rocketIcon} alt="Prototype Icon" />
                    </CardIcon>

                    <Text
                        fontSize="medium"
                        color="white"
                        fontWeight={600}
                        fontFamily="secondary"
                        margin={['15px', '0px']}
                    >
                        Deploy
                    </Text>

                    <Text
                        fontSize="small"
                        color="white"
                        fontWeight={500}
                        fontFamily="primary"
                        maxWidth={180}
                        textAlign="center"
                    >
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Text>
                </Card>
            </Wrapper>
        </Wrapper>
    );
};

export default Workflow;
