import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import './App.css';

import { ThemeProvider } from '@mui/system';
import theme from './theme';

import ContextProvider from './ContextProvider';
import Routers from './Routers';

const queryClient = new QueryClient();

function App() {
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <Routers/>
        </ThemeProvider>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
