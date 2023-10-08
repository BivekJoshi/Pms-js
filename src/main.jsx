import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import path
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';
import App from './App';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient} contextSharing>
    <Provider store={store}>
      <Toaster position='top-right' reverseOrder={false} />
      <App />
    </Provider>
  </QueryClientProvider>
);
