import React from 'react';
import { TextField, Button } from '@material-ui/core';

import { useStyles } from './form.styles';

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        className={classes.textField}
        id='outlined-basic'
        label='ID'
        variant='outlined'
      />
      <TextField
        className={classes.textField}
        id='outlined-basic'
        label='Title'
        variant='outlined'
      />
      <TextField
        className={classes.textField}
        id='outlined-basic'
        label='Description'
        variant='outlined'
      />
      <Button className={classes.button} variant='contained' color='primary'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
