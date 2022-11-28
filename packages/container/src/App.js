import React,{lazy,Suspense,useState} from 'react';
import {BrowserRouter,Route,Switch }  from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
//import MarketingApp from './components/MarketingApp';
//import AuthApp from './components/AuthApp'

//console.log(mount);
const generateClassName = createGenerateClassName({
    productionPrefix : 'co'
  });

  const MarketingLazy = lazy(() => import('./components/MarketingApp'));
  const AuthLazy = lazy(() => import('./components/AuthApp'));


export default () => {
const [isSignedIn,setIsSignedIn] = useState(false);

  return <>
  <BrowserRouter>
  <StylesProvider generateClassName={generateClassName}>
  <Header isSignedIn={isSignedIn} isSignedOut={() => setIsSignedIn(false)}/>
  <Suspense fallback={<div>loading...</div>}>
  <Switch>
    <Route path="/auth" >
        <AuthLazy onSignIn={() => setIsSignedIn(true)} />
    </Route>
    <Route path="/"  >
        <MarketingLazy/>
    </Route>
  </Switch>
  </Suspense>
  </StylesProvider>
  </BrowserRouter>
  </> ;
};
