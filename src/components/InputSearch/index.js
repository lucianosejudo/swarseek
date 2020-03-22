import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    background: '#181818',  
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#fafafa',
  },
  iconButton: {
    padding: 10,
    color: 'white'
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function InputSearch({ onChange }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => onChange(e.target.value)}
        placeholder="Search"
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
