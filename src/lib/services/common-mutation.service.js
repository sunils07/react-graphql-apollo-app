
function commonMutationService(client, token, mutation, variables) {
    return client.mutate({
        mutation,
        variables: variables
    });
}

export default commonMutationService;