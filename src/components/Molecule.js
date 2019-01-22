import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Fade from '@material-ui/core/Fade';

import StructureImage from './StructureImage';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    height: '100vh',
    overflowX: 'hidden'
  },
  form: {
    padding: theme.spacing.unit * 5,
  },
  save: {
    backgroundColor: blue[500],
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: blue[700],
    }
  },
  headerSection: {
    paddingBottom: theme.spacing * 3
  },
  actions: {
    paddingTop: theme.spacing.unit * 5
  },
  next: {
    backgroundColor: green[500],
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: green[700],
    }
  },
  front: {
    position: 'absolute',
    lineHeight: '80px',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  back: {
    position: 'absolute',
    lineHeight: '80px',
    height: '100%',
    width: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: theme.palette.background.paper,
    transform: 'rotateY(-180deg)',
    MsTransform: 'rotateY(-180deg)', /* IE 9 */
    WebkitTransform: 'rotateY(-180deg)' /* Safari */
  },
  cardWrapper: {
    perspective: '800px'
  }
});

class Molecule extends Component {
  constructor(props) {
    super(props);
    this.state={
      show: false,
      size: this.props.theme.spacing.unit * 50
    };
    this.revealMolecule = this.revealMolecule.bind(this);
    this.handleArrowKey = this.handleArrowKey.bind(this);
  }
  componentDidMount () {
    this.rootEl.focus();
  }

  revealMolecule = () => this.setState({ show: true });
  handleArrowKey = e => {
    switch (e.key) {
        case 'Enter':
            this.setState({ show: true });
            break;
        case 'ArrowUp':
            this.setState({ size: this.state.size + this.props.theme.spacing.unit * 3 });
            break;
        case 'ArrowDown':
            this.setState({ size: this.state.size - this.props.theme.spacing.unit * 3 });
            break;
        case 'ArrowLeft':
            this.props.molecule.id > 0 && this.props.history.push(`/molecules/${parseInt(this.props.molecule.id) - 1}`);
            break;
        case 'ArrowRight':
            this.props.history.push(this.props.molecule.last ? '/':`/molecules/${parseInt(this.props.molecule.id) + 1}`);
            break;
    }
  }

  render() {
    const { classes, theme, molecule } = this.props;
    return(
      <Fade in={true}>
        <div
          className={classes.root}
          ref={el=>this.rootEl=el}
          tabIndex="0"
          onKeyDown={this.handleArrowKey}
          onKeyPress={this.handleArrowKey}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={8}>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.headerSection}
                justify="center"
                alignItems="center"
                spacing={16}>
                <Grid item xs={12}>
                  <Paper elevation={16}>
                    <StructureImage style={{
                      width: this.state.size,
                      height: this.state.size,
                      padding: theme.spacing.unit * 3,
                      margin:'auto'
                    }} molblock={molecule.molblock} />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.cardWrapper}>
                    <Paper elevation={16} style={{
                      position: 'relative',
                      height: '80px',
                      WebkitTransition: 'transform 1.5s',
                      transition: 'transform 1.5s',
                      transformStyle:'preserve-3d',
                      backgroundColor: 'transparent',
                      transform: this.state.show ? 'rotateY(-180deg)' : undefined,
                      MsTransform: this.state.show ?'rotateY(-180deg)' : undefined, /* IE 9 */
                      WebkitTransform: this.state.show ? 'rotateY(-180deg)' : undefined /* Safari */
                      }}>
                      <Typography align="center" variant="display2" className={classes.front}>
                        ?
                      </Typography>
                      <Typography align="center" variant="title" className={classes.back}>
                        {molecule.name}
                      </Typography>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                alignItems='flex-end'
                justify="space-between"
                className={classes.actions}
                spacing={8}>
                <Grid item xs={4}>
                  <Button disabled={parseInt(molecule.id) === 0} variant="contained" className={classes.next} fullWidth component={Link} to={`/molecules/${parseInt(molecule.id) - 1}`}>
                  <ArrowBack style={{ marginRight: '12px' }}/>
                    Previous
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" className={classes.save} component="span" color="primary" fullWidth onClick={this.revealMolecule}>
                    Show
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" className={classes.next} fullWidth component={Link} to={molecule.last ? '/' : `/molecules/${parseInt(molecule.id) + 1}`}>
                    {molecule.last ? 'Finish' : 'Next' }
                  <ArrowForward style={{ marginLeft: '12px' }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    );
  }
}

Molecule.propTypes = {
  classes: PropTypes.object.isRequired,
  molecule: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(Molecule));
