import styled from 'styled-components';

interface TextProps {
    fontSize: 'small' | 'medium' | 'big' | 'title';
    color: 'white' | 'black';
    fontWeight: 500 | 600;
    fontFamily: 'primary' | 'secondary';
    margin?: Array<string>;
    padding?: Array<string>;
    textAlign?: 'center' | 'right' | 'justify' | 'left';
}

export const Text = styled.p<TextProps>`
    font-family: ${(props) => props.theme.fonts[props.fontFamily]};
    font-size: ${(props) => props.theme.textSize[props.fontSize] + 'px'};
    color: ${(props) => props.theme.colors.text[props.color]};
    font-weight: ${(props) => props.fontWeight};
    padding: ${(props) => props.padding?.join(' ')};
    margin: ${(props) => props.margin?.join(' ')};
    text-align: ${(props) => props.textAlign};
`;
