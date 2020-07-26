import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { useStyles } from './header.styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Facebook Clone
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
