import { SimpleGrid, Spinner, Skeleton } from '@chakra-ui/react'

import TeamCard from '@components/ui/cards/TeamCard'
import QuerySuspense from '@components/utility/suspense/QuerySuspense'

import { CloudinaryContext } from 'cloudinary-react'

function TeamsGrid({ teams }) {
  return (
    <CloudinaryContext cloudName="dbc3x3s7c">
      <SimpleGrid minChildWidth="250px" spacing="40px">
        <QuerySuspense fallback={<Skeleton />}>
          {teams.map((team) => {
            const [colors] = team.colorScheme
            const bg = `linear-gradient(108deg, ${colors?.secondary ?? ''} 0%, ${colors?.primary ?? ''} 65%)`
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
        </QuerySuspense>
      </SimpleGrid>
    </CloudinaryContext>
  )
}

export default TeamsGrid
