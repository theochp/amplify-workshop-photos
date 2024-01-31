/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPostModel = /* GraphQL */ `
  query GetPostModel($id: ID!) {
    getPostModel(id: $id) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPostModels = /* GraphQL */ `
  query ListPostModels(
    $filter: ModelPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
