import React from 'react';
import {Provider} from 'react-redux';

import {MainNavigation} from './src/navigation/Main';
import {store} from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);
export default App;
