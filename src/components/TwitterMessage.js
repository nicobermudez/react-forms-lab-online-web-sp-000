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
        <input type="text" name="message" id="message" value={} />
      </div>
    );
  }
}

export default TwitterMessage;
