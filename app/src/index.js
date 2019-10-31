import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
import 'react-native-gesture-handler';
import * as Sentry from '@sentry/react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';

Sentry.init({
  dsn: 'https://9dcd853bb7ba451db1a7585f9edd81ba@sentry.io/1803905',
});

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <App />
      </PersistGate>
    </Provider>
  );
}
