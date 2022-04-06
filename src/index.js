import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyles';
import { theme } from './theme';
import App from './App';

const queryClient = new QueryClient();
ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <App />
                </ThemeProvider>
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
