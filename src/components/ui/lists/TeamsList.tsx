import { ListItem, List } from '@chakra-ui/react'
import TeamCard from '@components/TeamCard'

function TeamsList({ teams }) {
  return (
    <List spacing={3}>
      {teams.map((team) => (
        <ListItem>
          <TeamCard key={team.name} name={team.name} logo={team.logo} />
        </ListItem>
      ))}
    </List>
  )
}

export default TeamsList
