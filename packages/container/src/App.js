import React from 'react';
import {BrowserRouter }  from 'react-router-dom';
import { StylesProvider,createGenerateClassNames } from '@material-ui/core/styles';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

//console.log(mount);
const generateClassName = createGenerateClassName({
    productionPrefix : 'co'
  });


export default () => {
  return <>
  <BrowserRouter>
  <StylesProvider>
  <Header/>
  <MarketingApp/>
  </StylesProvider>
  </BrowserRouter>
  </> ;
};
