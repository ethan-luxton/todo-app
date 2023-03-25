import React from 'react';
import Header from './Components/Header/Header.jsx'
import Todo from './Components/Todo';
import { Route, Routes } from 'react-router-dom';
import Settings from './Components/Settings/Settings.jsx'
import { SettingsProvider } from './Components/settingsContext';
import { Auth } from './Components/Login/Auth.jsx';
import LoginProvider from './Components/Login/Context.jsx';
export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Header/>
        <Routes>
          
            <Route path="/" element={<SettingsProvider><Todo /></SettingsProvider>} />
            <Route path="/settings" element={<SettingsProvider><Settings /></SettingsProvider>} />
          
        </Routes>
        
      </LoginProvider>
      
    );
  }
}