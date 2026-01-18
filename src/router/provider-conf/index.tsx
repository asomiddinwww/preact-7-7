import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Modals from '../../components/modals';
import { Provider } from 'react-redux';
import { store } from '../../redux';

const ProviderConf = ({children} : {children: React.ReactNode}) => {
    const queryClinent = new QueryClient();
  return (

    <>
    <Provider store={store}>
    <QueryClientProvider client={queryClinent}>
    {children}
    <Modals/>
    </QueryClientProvider>
    </Provider>
    </>
  )
}

export default ProviderConf