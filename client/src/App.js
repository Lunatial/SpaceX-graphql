import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import logo from "./logo.jpg";

import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              src={logo}
              alt="logo"
              style={{ width: 300, dispay: "block", margin: "auto" }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
