import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/error-page/error-page';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './mui-theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Routes from './routes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary fallbackRender={ErrorPage}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <Routes />
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </ErrorBoundary>
  );
};

export default App;
