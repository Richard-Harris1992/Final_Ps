import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import LinkButtonContainer from './components/LinkButtonContainer';
import './MainPage.css';



const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <WelcomeMessage />
      <LinkButtonContainer /> 
    </div>
  );
}

  export default MainPage;