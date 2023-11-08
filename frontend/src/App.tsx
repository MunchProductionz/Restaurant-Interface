import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage/Homepage';
import { OrderProvider } from './orders/OrderProvider';

function App() {
  return (
    <OrderProvider>
      <Homepage />
    </OrderProvider>
  );
}

export default App;
