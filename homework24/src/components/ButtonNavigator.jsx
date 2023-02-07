import React, { Component } from "react";
import "./ButtonNavigator.css"


class ButtonNavigator extends Component {
  ShowContent = function () {
    console.log('information')
  }
  render() {
    return (
      <button type="button" data-index = {this.props.id} className="buttonNav" onClick={this.ShowContent}>{ this.props.value} </button>
    )
  }
}

export default ButtonNavigator;