import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  start: {
    fontSize: theme.typography.display1.fontSize,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  },
  title: {
    padding: theme.spacing.unit * 3,
    color: theme.palette.text.primary
  }
});

const Start = (props) => {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={8}>
        <Grid item>
          <Typography align="center" variant="display1" gutterBottom className={classes.title}>
            Structure Recognition
          </Typography>
        </Grid>
        <Grid item>
          <Button className={classes.start} variant="contained" color="primary" fullWidth component={Link} to={'/molecules/0'}>
            Start
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Start.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Start);
