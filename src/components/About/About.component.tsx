import React, { FunctionComponent } from 'react';

import { Text } from '../../styles/shared/Text';
import { Title } from '../../styles/shared/Title';

import {
    AboutImage,
    AboutText,
    AboutWrapper,
    MeImageWrapper,
    SkillIcon,
    AboutSkills,
} from './styles';

import meImage from '../../assets/images/me.png';
import reactIcon from '../../assets/icons/react-icon.svg';
import tsIcon from '../../assets/icons/ts-icon.svg';
import nodeIcon from '../../assets/icons/node-icon.svg';
import { Wrapper } from '../../styles/shared/Wrapper';

const About: FunctionComponent = () => {
    const birthdate = new Date(1995, 11, 28);
    const ageDate = Date.now() - Number(birthdate);
    const age = new Date(ageDate).getUTCFullYear() - 1970;

    return (
        <Wrapper
            id="aboutme"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
        >
            <AboutWrapper
                width="100%"
                maxWidth="1600px"
                height="650px"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
            >
                <AboutText
                    width="50%"
                    height="100%"
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="center"
                    padding={['60px', '160px']}
                >
                    <Title color="white" margin={['0px', '0px', '60px', '0px']}>
                        About me
                    </Title>

                    <Text
                        fontFamily="primary"
                        color="white"
                        fontSize="small"
                        fontWeight={500}
                        maxWidth={350}
                        margin={['0px', '0px', '15px', '0px']}
                    >
                        I’m {age} years old and I’ve been working on software
                        development since 2019. I have experience working with Web
                        Apps, E-commerce, REST and GraphQL APIs, Micro-services,
                        Automation, Serverless, Cloud Services and more.
                    </Text>

                    <Text
                        fontFamily="primary"
                        color="white"
                        fontSize="small"
                        fontWeight={500}
                        margin={['0px', '0px', '15px', '0px']}
                    >
                        <b>Full name:</b> Vinicius Savegnago Silva
                    </Text>

                    <Text
                        fontFamily="primary"
                        color="white"
                        fontSize="small"
                        fontWeight={500}
                        margin={['0px', '0px', '15px', '0px']}
                    >
                        <b> Location:</b> São Paulo, Brazil
                    </Text>

                    <Text
                        fontFamily="primary"
                        color="white"
                        fontSize="small"
                        fontWeight={500}
                        margin={['0px', '0px', '36px', '0px']}
                    >
                        <b>Main skills:</b>
                    </Text>

                    <AboutSkills
                        width="100%"
                        height="auto"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <SkillIcon src={reactIcon} alt="React logo icon" />
                        <SkillIcon src={nodeIcon} alt="Node logo icon" />
                        <SkillIcon src={tsIcon} alt="Typescript logo icon" />
                    </AboutSkills>
                </AboutText>

                <AboutImage
                    width="50%"
                    height="100%"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <MeImageWrapper
                        src={meImage}
                        alt="Me in a hoddie, wearing glasses. The background is a coffee shop."
                    />
                </AboutImage>
            </AboutWrapper>
        </Wrapper>
    );
};

export default About;
