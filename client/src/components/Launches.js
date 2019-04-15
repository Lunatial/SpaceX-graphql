import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import LaunchItem from "./LaunchItem";

const LAUNCES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;

export default class Launches extends Component {
  render() {
    return (
      <>
        <h1 className={"display-4 my-3"}>Launches</h1>
        <Query query={LAUNCES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log(error);
            }
            return (
              <>
                {data.launches.map((launch, index) => (
                  <LaunchItem key={index} launch={launch} />
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}
