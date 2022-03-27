import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyles';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
);
