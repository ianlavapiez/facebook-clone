import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './post-container.styles';

import PostCard from '../post-card/post-card.component';

const PostContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <PostCard />
        </Grid>
        <Grid item xs={3}>
          <PostCard />
        </Grid>
        <Grid item xs={3}>
          <PostCard />
        </Grid>
        <Grid item xs={3}>
          <PostCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PostContainer;
