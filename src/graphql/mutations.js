/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPostModel = /* GraphQL */ `
  mutation CreatePostModel(
    $input: CreatePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    createPostModel(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePostModel = /* GraphQL */ `
  mutation UpdatePostModel(
    $input: UpdatePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    updatePostModel(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePostModel = /* GraphQL */ `
  mutation DeletePostModel(
    $input: DeletePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    deletePostModel(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
      __typename
    }
  }
`;
