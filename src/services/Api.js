export default() => {
    return require('graphql-client')({
    url: 'http://graphql.fearthec.test/graphql'
    });
}
