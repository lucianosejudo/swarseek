import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './styles.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  ul: {
    justifyContent: 'center',
  },
  item: {
    color: 'white',
  }
}));

export default function BasicPagination({ count }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        color="primary"
        size="small"
        classes={{
          ul: classes.ul,
          item: classes.item,
        }}      
      />
    </div>
  );
}