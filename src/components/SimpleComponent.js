// Code SimpleComponentHere Here
import React from "react";

export default class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

  handleClick = (event) => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
