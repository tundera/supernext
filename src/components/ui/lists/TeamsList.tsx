import { ListItem, List } from '@chakra-ui/react'

import TeamCard from '@components/ui/cards/TeamCard'
import { CloudinaryContext } from 'cloudinary-react'

function TeamsList({ teams }) {
  return (
    <CloudinaryContext cloudName="dbc3x3s7c">
      <List spacing={3}>
        {teams.map((team) => {
          const [{ primary, secondary }] = team.colorScheme
          const bg = `linear-gradient(108deg, ${secondary ?? ''} 0%, ${primary ?? ''} 65%)`
          return (
            <ListItem py="4">
              <TeamCard
                key={team.slug}
                name={team.name}
                city={team.city}
                logo={team.logoSlug}
                slug={team.slug}
                background={bg}
              />
            </ListItem>
          )
        })}
      </List>
    </CloudinaryContext>
  )
}

export default TeamsList
