import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './post-form.styles';

import BackButton from '../../components/post-form/back-button/back-button.component';
import Form from '../../components/post-form/form/form.component';

const PostFormPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant='h4'>Post Form</Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid container justify='flex-end'>
            <BackButton />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default PostFormPage;
