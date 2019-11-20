const { ApolloServer, gql } = require('apollo-server-express')
const resolvers = require('./resolver')

const schemaQuery = gql`
    type Query {
        dummy: String!
    }

    type Mutation {
        GenerateThumbnail(input: ThumbnailInput): [Thumbnail]
        GenerateMetadata(input: MetadataInput): Metadata
    }

    input ThumbnailInput {
        url: String
        limit: Int
    }

    type Thumbnail {
        ETag: String
        Location: String
        key: String
        Key: String
        Bucket: String
    }

    input MetadataInput {
        url: String
    }

    type Metadata {
        width: Int
        height: Int
        duration: Float
        size: Int
        format: String
    }
`

module.exports = new ApolloServer({
    typeDefs: [
        schemaQuery
    ],
    resolvers,
    playground: {
        endpoint: '/vidp'
    }
})