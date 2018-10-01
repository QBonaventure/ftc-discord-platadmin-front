export const ALL_GUILDS_QUERY = `{
  allGuilds {
    edges {
      guild: node {
        name
        id
        joinedDate
        guildDomain: guildsDomainByGuildId {
          domain
          isActive
        }
        owner: userByOwnerId {
          id
          username
          tag
          email
        }
      }
    }
  }
}`

export const GUILD_EDITION_QUERY = `{
  allGuilds {
    edges {
      guild: node {
        name
        id
        joinedDate
        guildDomain: guildsDomainByGuildId {
          domain
          isActive
        }
        owner: userByOwnerId {
          id
          username
          tag
          email
        }
      }
    }
  }
}`
