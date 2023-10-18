import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import path
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { setLanguageFromStore } from '../i18n';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
AOS.init({
  once: false,
});

store.subscribe(setLanguageFromStore);

const root = createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient} contextSharing>
    <Provider store={store}>
      <Toaster position='top-right' reverseOrder={false} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </Provider>
  </QueryClientProvider>
);
