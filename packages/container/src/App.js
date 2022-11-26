import React from 'react';
import {BrowserRouter }  from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

//console.log(mount);

export default () => {
  return <>
  <BrowserRouter>
  <Header/>
  <MarketingApp/>
  </BrowserRouter>
  </> ;
};
