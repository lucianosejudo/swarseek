import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FlightTakeoff from '@material-ui/icons/FlightTakeoff'
import FlightLand from '@material-ui/icons/FlightLand'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    color: '#fafafa',
    background: '#181818'
  }
}));

function TravelButton({ active = false, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        classes={{
          outlined: classes.text
        }}
        endIcon={active ? <FlightLand /> : <FlightTakeoff />}
        onClick={onClick}
      >
        {active ? 'Go back to Earth' : 'Go to space'}
      </Button>
    </div>
  )
}

TravelButton.propTypes = {

}

export default TravelButton

