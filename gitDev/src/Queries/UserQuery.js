import gql from 'graphql-tag';

const UserQuery = gql`
  query {
    repositoryCount
    edges {
        node {
          ... on User {
            name
            bio
            url
            repositories{
              totalCount
            }
            starredRepositories{
              totalCount
            }
          }
        }
      }
  }
`;


// query SearchJsDvelopersInLagos($queryString: String!) {
//     search(query: $queryString, type: USER, first: 100) {
//       repositoryCount
//       edges {
//         node {
//           ... on User {
//             name
//             bio
//             url
//             repositories{
//               totalCount
//             }
//             starredRepositories{
//               totalCount
//             }
//           }
//         }
//       }
//     }
//   }

export default UserQuery; 