import React, { useState }from 'react'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import Grid from '@material-ui/core/Grid'
import Welcome from 'components/Welcome'
import Search from 'components/Search'
import Resume from 'components/Resume'
import LogoTitle from 'components/LogoTitle'
import Space from 'components/SpaceBackground'
import Menu from 'components/Menu'
import TravelButton from 'components/TravelButton'
import './styles.scss'

function Main({ selectedItem }) {
  const [space, toggleSpace] = useState(false)

  function handleSetSpace() {
    toggleSpace(!space)
  }

  return (
    <div className="main">
      {space && <Space />}
      <Grid container spacing={5} justify="center">
        <Grid item sm={12} md={10}>
          <LogoTitle />
        </Grid>
        <Grid item sm={0} md={2}>
          <TravelButton onClick={handleSetSpace} active={space} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} md={3}>
          <Search />
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedItem
          ? <Resume item={selectedItem} /> : <Welcome />
          }
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedItem: selectSelectedItem(state),
})

export default connect(mapStateToProps, null)(Main);

