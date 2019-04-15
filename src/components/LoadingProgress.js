import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loadingProgress.css";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: "rgb(87, 204, 87)"
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div className="circular-progress">
      <CircularProgress className={classes.progress} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
