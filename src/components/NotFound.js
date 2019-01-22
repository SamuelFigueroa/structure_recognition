import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    padding: theme.spacing.unit * 3,
  }
});

const NotFound = (props) => {
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
            Molecule Not Found &#x1f622;
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
