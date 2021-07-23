import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

const styles = {
  root: {
    width: "100%"
  },
  slider: {
    padding: "20px 0px"
  }
};

const PrettoSlider = withStyles({
    root: {
      color: '#40A9F3',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#9fd1f4',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50%)',
    },
    track: {
      height: 5,
      borderRadius: 4,
    },
    rail: {
      height: 5,
      borderRadius: 4,
    },
  })(Slider);

class StepSlider extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.min = parseInt(this.props.min);
    this.max = parseInt(this.props.max);
    this.state = {
      value: parseInt(this.props.value)
    };
  }

  onUpdate(event, value) {
    this.setState({ value });
    this.props.onUpdate(value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <PrettoSlider 
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
            value={this.state.value}
            min={this.min}
            max={this.max}
            step={this.props.step}
            onChange={this.onUpdate}
        />
      </div>
    );
  }
}

StepSlider.defaultProps = {
  min: 10,
  max: 100,
  step: 1
};

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StepSlider);
