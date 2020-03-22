import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpaceBackground from 'components/SpaceBackground'
import Menu from 'components/Menu'
import './styles.scss';

function Main() {
  return (
    <div className="main">
      <SpaceBackground />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={2}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
