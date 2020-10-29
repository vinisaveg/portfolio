import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import theme from './styles/theme/theme';

import { Wrapper } from './styles/shared/Wrapper';
import Header from './components/Header/Header.component';
import Welcome from './components/Welcome/Welcome.component';
import Projects from './components/Projects/Projects.component';
import Workflow from './components/Workflow/Workflow.component';

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
                    height="auto"
                >
                    <Header />

                    <Welcome />

                    <Projects />

                    <Workflow />
                </Wrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
