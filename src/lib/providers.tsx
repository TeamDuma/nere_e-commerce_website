'use client';

import { Provider } from 'react-redux';

import { reduxStore, persistor } from '@/lib/redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ReferralProvider } from './context/ReferralContext';

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <ReferralProvider>{props.children}</ReferralProvider>
      </PersistGate>
    </Provider>
  );
};
