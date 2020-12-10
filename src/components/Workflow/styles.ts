import styled from 'styled-components';

import { Wrapper } from '../../styles/shared/Wrapper';
import { Title } from '../../styles/shared/Title';

export const WorkflowWrapper = styled(Wrapper)`
    @media only screen and (max-width: 1280px) {
        background-color: ${(props) => props.theme.colors.background};
    }
`;

export const WorkflowTitle = styled(Title)`
    @media only screen and (max-width: 1280px) {
        margin-top: 60px;
        color: white;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 60px;

    @media only screen and (max-width: 1170px) {
        margin: 36px 60px;
    }
`;

export const CardIcon = styled.div`
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 50%;
`;

export const Icon = styled.img`
    width: 80px;
`;
