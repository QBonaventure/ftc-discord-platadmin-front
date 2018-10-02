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

export const GUILD_EDITION_QUERY = `query ($guildId: BigInt!) {
  guildById(id: $guildId) {
    id
    name
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
}`

export const GUILD_EDITION_UPDATE = `
mutation updateGuildsDomain($guildId: BigInt!, $guildDomainPatch: GuildsDomainPatch!) {
  updateGuildsDomainByGuildId(input: {guildId: $guildId, guildsDomainPatch: $guildDomainPatch }) {
    guildsDomain {
      guildId
      domain
      isActive
    }
  }
}`
