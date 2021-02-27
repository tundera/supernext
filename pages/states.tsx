import type { CustomNextPage as NextPage } from 'types'

import { Flex, Box, Heading, Text } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'
import { assign, Machine } from 'xstate'
import { useMachine } from '@xstate/react'

import CountrySelector from '@components/CountrySelector'
import CountryStats from '@components/CountryStats'
import CountrySearch from '@components/CountrySearch'

const statsApi = 'https://coronavirus-19-api.herokuapp.com/countries'

const statsMachine = Machine(
  {
    id: 'statsMachine',
    initial: 'fetchStats',
    context: {
      countriesSelected: [],
      stats: null,
    },
    states: {
      fetchStats: {
        invoke: {
          src: () =>
            new Promise(async (resolve, reject) => {
              try {
                const stats = await fetch(statsApi).then((response) => response.json())
                return resolve(stats)
              } catch (error) {
                console.log('error in fetching stats: ', error)
                return reject(error)
              }
            }),
          onDone: { target: 'ready', actions: 'assignStats' },
          onError: 'error',
        },
      },
      ready: {
        on: {
          COUNTRY_SELECTED: { actions: 'updateSelectedCountry' },
        },
      },
      error: {},
    },
  },
  {
    actions: {
      assignStats: assign((_context, event) => ({
        stats: event.data,
      })),
      updateSelectedCountry: assign((context, event) => ({
        countriesSelected: context.stats.reduce(
          (acc, stat) =>
            stat.country.toLowerCase().match(event.country.target.value.toLowerCase()) ? [...acc, stat] : acc,
          [],
        ),
      })),
    },
  },
)

const StatesPage: NextPage = () => {
  const [current, send] = useMachine(statsMachine)

  return (
    <>
      <Heading as="h3">CoronaVirus Information</Heading>
      {current.matches('fetchStats') && <Text>Loading Stats…</Text>}
      {current.matches('error') && <Text>Error fetching stats…</Text>}
      {current.matches('ready') && (
        <>
          <CountrySelector
            stats={current.context.stats}
            handleChange={(country) => send('COUNTRY_SELECTED', { country })}
          />

          <CountrySearch handleChange={(country) => send('COUNTRY_SELECTED', { country })} />
        </>
      )}

      {current.context.countriesSelected.length > 0 && <CountryStats stats={current.context.countriesSelected} />}
    </>
  )
}

StatesPage.getLayout = getLayout

export default StatesPage
