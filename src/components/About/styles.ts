import styled from 'styled-components';
import { Wrapper } from '../../styles/shared/Wrapper';

export const AboutWrapper = styled(Wrapper)`
    @media screen and (max-width: 1105px) {
        flex-direction: column;
    }
`;

export const AboutText = styled(Wrapper)`
    @media screen and (max-width: 1105px) {
        width: 100%;
        align-items: center;
        order: 2;
        text-align: center;
        padding: 60px 30px;
    }
`;

export const AboutImage = styled(Wrapper)`
    @media screen and (max-width: 1105px) {
        width: 100%;
        order: 1;
    }
`;

export const AboutSkills = styled(Wrapper)`
    @media screen and (max-width: 1105px) {
        justify-content: center;
    }
`;

export const MeImageWrapper = styled.img`
    width: 100%;
    height: 100%;
`;

export const SkillIcon = styled.img`
    width: 45px;
    margin: 10px;

    &:first-child {
        margin-left: 0px;
    }
`;
