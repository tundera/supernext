import { SimpleGrid } from '@chakra-ui/react'

import TeamCard from '@components/ui/cards/TeamCard'

import { CloudinaryContext } from 'cloudinary-react'

function TeamsGrid({ teams }) {
  return (
    <CloudinaryContext cloudName="dbc3x3s7c">
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {teams.map((team) => {
          const { primary, secondary } = team.colorScheme
          const bg = `linear-gradient(108deg, ${secondary ?? ''} 0%, ${primary ?? ''} 65%)`
          return (
            <TeamCard
              key={team.slug}
              name={team.name}
              city={team.city}
              logo={team.logoSlug}
              slug={team.slug}
              background={bg}
            />
          )
        })}
      </SimpleGrid>
    </CloudinaryContext>
  )
}

export default TeamsGrid
