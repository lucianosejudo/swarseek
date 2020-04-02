import React, { useState }from 'react'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import { selectItem } from 'components/Search/slice'
import Grid from '@material-ui/core/Grid'
import Welcome from 'components/Welcome'
import Search from 'components/Search'
import Resume from 'components/Resume'
import LogoTitle from 'components/LogoTitle'
import Space from 'components/SpaceBackground'
import Menu from 'components/Menu'
import TravelButton from 'components/TravelButton'
import './styles.scss'

function Main({ selectedItem, selectItem }) {
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
        <Grid item xs={12} sm={3}>
          <Menu />
          <TravelButton onClick={handleSetSpace} active={space} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={6}>
          {selectedItem
          ? <Resume item={selectedItem} selectItem={selectItem} /> : <Welcome />
          }
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedItem: selectSelectedItem(state),
})

const actions = {
  selectItem
}

export default connect(mapStateToProps, {...actions})(Main);

