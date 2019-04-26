import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 140
    };
  }

  handleMaxCharsChange = event => {
    this.setState({
      maxChars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMaxCharsChange(event)} value={this.state.message} />
      </div>
    );
  }
}
export default TwitterMessage;
