import React, { useState }from 'react'
import Grid from '@material-ui/core/Grid'
import Search from 'components/Search'
import Resume from 'components/Resume'
import LogoTitle from 'components/LogoTitle'
import Space from 'components/SpaceBackground'
import Menu from 'components/Menu'
import TravelButton from 'components/TravelButton'
import './styles.scss'

function Main() {
  const [space, toggleSpace] = useState(false)

  function handleSetSpace() {
    toggleSpace(!space)
  }
  return (
    <div className="main">
      {space && <Space />}
      <Grid container spacing={5}>
        <Grid item sm={12}>
          <LogoTitle />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Menu />
          <TravelButton onClick={handleSetSpace} active={space} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Resume />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
