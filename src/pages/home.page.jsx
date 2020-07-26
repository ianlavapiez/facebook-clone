import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './home.styles';

import PostContainer from '../components/home/post-container/post-container.component';
import AddButton from '../components/home/add-button/add-button.component';

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant='h4'>Post List</Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify='flex-end'>
            <AddButton />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <PostContainer />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
