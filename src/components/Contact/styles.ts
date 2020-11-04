import styled from 'styled-components';

import { Wrapper } from '../../styles/shared/Wrapper';

export const ContactWrapper = styled(Wrapper)`
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ContactText = styled(Wrapper)`
    background-color: transparent;
    @media screen and (max-width: 1000px) {
        width: 100%;
        align-items: center;
        text-align: center;
        padding: 60px 30px;
    }
`;

export const ContactMessage = styled(Wrapper)`
    background-color: transparent;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        padding: 0px 20px;
    }
`;

export const MessageInput = styled.textarea`
    border: ${(props) => `1px solid ${props.theme.colors.secondary}`};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.textSize.medium + 'px'};
    width: 100%;
    min-width: 300px;
    max-width: 400px;
    height: 300px;
    max-height: 400px;
    min-height: 300px;
    margin: 0px;
    padding: 15px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;

    &&::placeholder {
        color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
    }

    &&::-webkit-scrollbar {
        width: 10px;
        border-radius: 50%;
    }

    &&::-webkit-scrollbar-track {
        background: #5cca8d;
    }

    &&::-webkit-scrollbar-thumb {
        background: #232829;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #232829;
    }
`;
