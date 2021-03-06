import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },  
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function History(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.history.length === 0 ? props.fetchHistory() : props.history.map(history => (
              <TableRow key={history.id} >
                {console.log(`history passing into fetch: ${history.id}`)}
                <TableCell component="th" scope="row">
                  {history.id}
                </TableCell>
                <TableCell align="left">{history.date}</TableCell>
                <TableCell align="left">{history.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);