import * as React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import { configureStore } from "./src/infrastructure/sagas/redux";
import Routes from './src/ui/routes';

const App: React.FC = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
