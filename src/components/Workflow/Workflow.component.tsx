import React, { FunctionComponent } from 'react';

import { Wrapper } from '../../styles/shared/Wrapper';
import { Text } from '../../styles/shared/Text';

import { Card, CardIcon, Icon, WorkflowTitle, WorkflowWrapper } from './styles';

import prototypeIcon from '../../assets/icons/prototype-icon.svg';
import codeIcon from '../../assets/icons/code-icon.svg';
import rocketIcon from '../../assets/icons/rocket-icon.svg';

const Workflow: FunctionComponent = () => {
    return (
        <WorkflowWrapper
            id="mywork"
            width="100%"
            height="auto"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            backgroundColor="#F5F5F5"
        >
            <WorkflowTitle color="black" margin={['160px', '0px', '60px', '0px']}>
                My workflow
            </WorkflowTitle>

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
                        maxWidth={190}
                        textAlign="center"
                    >
                        Designing and adjusting the project final look
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
                        maxWidth={190}
                        textAlign="center"
                    >
                        With a nice cup of coffee, the code is written
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
                        maxWidth={190}
                        textAlign="center"
                    >
                        Everything is working properly? let's launch it!
                    </Text>
                </Card>
            </Wrapper>
        </WorkflowWrapper>
    );
};

export default Workflow;
