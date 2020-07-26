import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';

import HomePage from './pages/home/home.page';
import PostFormPage from './pages/post-form/post-form.page';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/post-form' component={PostFormPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
