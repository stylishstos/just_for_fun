import React from "react";

import Merchant from "../components/merchant-form";

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Just for fun</h1>
        </header>
        <main>
          <Merchant />
        </main>
        <footer />
      </React.Fragment>
    );
  }
}
