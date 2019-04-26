import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      maxChars: 140
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.maxChars} onChange={event => this.handleMaxCharsChange(event)} />
      </div>
    );
  }
}
export default TwitterMessage;
