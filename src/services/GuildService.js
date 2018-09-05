import Api from './Api'

export default {
    getGuilds () {
        var response = Api().query('query AllGuilds { allGuilds { edges { node { id name isActive } } } }')
        return response.data
    }
}
