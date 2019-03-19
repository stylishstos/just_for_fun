import React from "react";
import { connect } from "react-redux";

import { register } from "../actions/merchant";

const mapDispatchToProps = {
  register
};

class Merchant extends React.PureComponent {
  state = {
    description: ""
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="merchant">
        <div>
          <label htmlFor="description">Имя</label>
          <input
            id="description"
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Зарегистрировать</button>
        <hr />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.props.register(this.state);
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Merchant);
