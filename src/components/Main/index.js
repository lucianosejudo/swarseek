import React from 'react'
import Grid from '@material-ui/core/Grid'
import Search from 'components/Search'
import LogoTitle from 'components/LogoTitle'
import Menu from 'components/Menu'
import './styles.scss'

function Main() {
  return (
    <div className="main">
      <Grid container spacing={5}>
        <Grid item sm={12}>
          <LogoTitle />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={4}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
