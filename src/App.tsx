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
                <Wrapper
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100vh"
                ></Wrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
