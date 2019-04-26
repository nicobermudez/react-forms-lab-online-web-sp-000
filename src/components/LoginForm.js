import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleUsernameChange = event => {
    this.setState = {
      
    }
  }

  handlePasswordChange = event => {

  }

  render() {
    return (
      <form onSubmit={event => this.props.onSubmit(event)}>
        <div>
          <label>
            Username

            <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />

          </label>
        </div>
        <div>
          <label>
            Password

            <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            />

          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
