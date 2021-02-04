import { ListItem, List } from '@chakra-ui/react'
import TeamCard from '@components/TeamCard'

function TeamsList({ teams }) {
  return (
    <List spacing={3}>
      {teams.map((team) => {
        const [{ primary, secondary }] = team.colorScheme
        const bg = `linear-gradient(108deg, ${secondary} 0%, ${primary} 65%)`
        return (
          <ListItem>
            <TeamCard key={team.slug} name={team.name} logo={team.logo} slug={team.slug} background={bg} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default TeamsList
