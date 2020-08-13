import React from 'react';
import logo from './logo.svg';
import store from './redux/Store'
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
