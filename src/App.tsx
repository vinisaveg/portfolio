import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme/theme';

import { Wrapper } from './styles/shared/Wrapper';

const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Wrapper padding={['40px', '60px']}>
                    <p>Project init!</p>
                </Wrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
