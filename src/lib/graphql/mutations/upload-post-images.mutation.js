import gql from 'graphql-tag';

export const UPLOAD_POST_IMAGE_MUTATION = gql`
  mutation UploadPostImage($files: [Upload!]!) {
    uploadPostImage(files: $files) {
        error
        message
        httpStatus
        httpCode
    }
  }
`;