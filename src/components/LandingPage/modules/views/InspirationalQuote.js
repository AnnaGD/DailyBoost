import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import InspirationalQuoteLayout from './InspirationalQuoteLayout';

const backgroundImage =
  'https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function InspirationalQuote(props) {
  const { classes } = props;

  return (
    <InspirationalQuoteLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h4" paragraph={true}>
      "Working hard for something we don't care about is called stressed; <br/> working hard for something we love is called passion." -Simon Sinek
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button> */}
      <Typography variant="body2" color="inherit" className={classes.more}>
        {/* Discover the experience */}
      </Typography>
    </InspirationalQuoteLayout>
  );
}

InspirationalQuote.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InspirationalQuote);