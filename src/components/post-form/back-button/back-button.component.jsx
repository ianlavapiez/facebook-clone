import React from 'react';
import { withRouter } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

const BackButton = ({ history }) => {
  const goToHomePage = () => history.push('/');

  return (
    <Fab color='secondary' aria-label='add' onClick={goToHomePage}>
      <ArrowBackIcon />
    </Fab>
  );
};

export default withRouter(BackButton);
