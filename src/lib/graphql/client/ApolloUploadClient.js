import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

function ApolloUploadClient(options) {
    if (!options && !options.uri) {
        throw new Error("Invalid options");
    }

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: createUploadLink({
            uri: options.uri
        })
    });
}

export default ApolloUploadClient;