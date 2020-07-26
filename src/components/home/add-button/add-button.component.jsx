import React from 'react';
import { withRouter } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const AddButton = ({ history }) => {
  const goToPostForm = () => history.push('/post-form');

  return (
    <Fab color='primary' aria-label='add' onClick={goToPostForm}>
      <AddIcon />
    </Fab>
  );
};

export default withRouter(AddButton);
