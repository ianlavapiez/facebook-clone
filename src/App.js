import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';

import HomePage from './pages/home.page';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
