import commonMutationService from "./common-mutation.service";
import { UPLOAD_POST_IMAGE_MUTATION } from "../graphql/mutations/upload-post-images.mutation";

function postImageUploadService(client, token, variables) {
    return commonMutationService(client, token, UPLOAD_POST_IMAGE_MUTATION, variables);
}

export default postImageUploadService;