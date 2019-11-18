import React from 'react';
import './App.css';
import { DataProvider } from './components/userContext/UserContext'
import { ComponentWrapper } from './components/componentWrapper/ComponentWrapper'
import {Navigation} from './components/navigation/Navigation'

function App() {
  return (
    <DataProvider>
      <ComponentWrapper />
    </DataProvider>
  );
}

export default App;
