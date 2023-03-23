import React from 'react';
import Header from './Components/Header/Header.jsx'
import Todo from './Components/Todo';
import { Route, Routes } from 'react-router-dom';
import Settings from './Components/Settings/Settings.jsx'
import { SettingsProvider } from './Components/settingsContext';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Routes>
          
            <Route path="/" element={<SettingsProvider><Todo /></SettingsProvider>} />
            <Route path="/settings" element={<SettingsProvider><Settings /></SettingsProvider>} />
          
        </Routes>
        
      </>
      
    );
  }
}