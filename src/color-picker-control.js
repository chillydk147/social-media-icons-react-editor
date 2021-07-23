import React from "react";
import reactCSS from 'reactcss';
import { ChromePicker } from "react-color";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.state = {
      color: this.props.color,
      displayColorPicker: false
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  onChangeComplete = color => {
    let colorCode = "rgba("+color.rgb.r+","+color.rgb.g+","+color.rgb.b+","+color.rgb.a+")";
    this.setState({ color: colorCode });
    this.props.onChangeComplete(colorCode);
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${ this.state.color }`,
        },
        swatch: {
          padding: '5px',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker
              width="300px"
              color={this.state.color}
              onChangeComplete={this.onChangeComplete}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
