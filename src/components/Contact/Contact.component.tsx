import React, { FunctionComponent, useState } from 'react';

import { Text } from '../../styles/shared/Text';
import { Title } from '../../styles/shared/Title';
import { Button } from '../../styles/shared/Button';

import { ContactText, ContactWrapper, ContactMessage, MessageInput } from './styles';
import { Wrapper } from '../../styles/shared/Wrapper';

const Contact: FunctionComponent = () => {
    const [message, setMessage] = useState('');

    const handleMessage = () => {
        if (message === '') {
            return;
        }

        const whatsappURL: string = `https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}/?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <Wrapper
            id="contact"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundColor="#6875E5"
        >
            <ContactWrapper
                width="100%"
                maxWidth="1600px"
                height="100%"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="row"
                backgroundColor="transparent"
            >
                <ContactText
                    width="50%"
                    height="100%"
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="center"
                    padding={['60px', '160px']}
                >
                    <Title color="white" margin={['60px', '0px']}>
                        Contact me
                    </Title>

                    <Text
                        color="white"
                        fontFamily="primary"
                        fontSize="small"
                        fontWeight={500}
                        maxWidth={350}
                    >
                        If there is a project in your mind, let’s build it together.
                        Contact me in any social media or send me a direct message.
                    </Text>
                </ContactText>

                <ContactMessage
                    width="50%"
                    height="100%"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={['60px', '0px']}
                >
                    <Wrapper
                        width="100%"
                        maxWidth="400px"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        backgroundColor="transparent"
                    >
                        <MessageInput
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Send me a message about your project..."
                        />

                        <Button
                            style={{ width: '100%' }}
                            buttonType="secondary"
                            padding={['16px', '24px']}
                            margin={['36px', '0px']}
                            target="_blank"
                            onClick={handleMessage}
                        >
                            Send
                        </Button>
                    </Wrapper>
                </ContactMessage>
            </ContactWrapper>
        </Wrapper>
    );
};

export default Contact;
