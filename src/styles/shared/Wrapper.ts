import styled, { DefaultTheme, StyledComponent } from 'styled-components';

interface WrapperProps {
    margin?: string;
    padding?: Array<string>;
}

export const Wrapper: StyledComponent<
    'div',
    DefaultTheme,
    WrapperProps
> = styled.div<WrapperProps>`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.padding?.join(' ')};
`;
