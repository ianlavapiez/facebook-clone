import React from 'react';
import { Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const AddButton = () => {
  return (
    <Fab color='primary' aria-label='add'>
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
