import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

class Project {
  name: string;
  description: string;
  constructor(n: string, d: string) {
    this.name = n;
    this.description = d;
  }
}

const client = new ApolloClient({
  uri: "http://api.github.com/graphql",
});

class Projects extends Component<{}, { projects: Project[] }> {
  state = {
    projects: [new Project("", "")],
  };

  // componentDidMount() {
  //   var projects = [];
  //   client
  //     .query({
  //       query: gql`
  //         query($queryString: String!) {
  //           search(query: $queryString, type: REPOSITORY, first: 10) {
  //             repositoryCount
  //             edges {
  //               node {
  //                 ... on Repository {
  //                   name
  //                   description
  //                   object(expression: "master") {
  //                     ... on Commit {
  //                       history {
  //                         totalCount
  //                       }
  //                     }
  //                   }
  //                   stargazers(first: 100) {
  //                     edges {
  //                       node {
  //                         name
  //                       }
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `,
  //       variables: { queryString: "org:world-hackers" },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }

  render() {
    const { projects } = this.state;
    return projects.map((item) => (
      <React.Fragment>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </React.Fragment>
    ));
  }
}

export default Projects;
