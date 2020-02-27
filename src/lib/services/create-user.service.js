import commonMutationService from "./common-mutation.service";
import { CREATE_USER_MUTATION } from "../graphql/mutations/create-user.mutation";

function createUserService(client, token, variables) {
    return commonMutationService(client, token, CREATE_USER_MUTATION, variables);
}

export default createUserService;