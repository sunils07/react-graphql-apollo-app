import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($inputs: CreateUserInput!) {
    createUser(inputs: $inputs) {
        error
        message
        httpStatus
        httpCode
    }
  }
`;