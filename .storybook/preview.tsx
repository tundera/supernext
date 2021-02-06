import type { StoryContext } from '@storybook/react'

import { themes } from '@storybook/theming'
import { withNextRouter } from 'storybook-addon-next-router'
import { withPerformance } from 'storybook-addon-performance'
import { addDecorator } from '@storybook/react'
// import { withTests } from '@storybook/addon-jest'
import '@storybook/addon-console' // Automatically forwards all logs in the "Actions" panel - See https://github.com/storybookjs/storybook-addon-console

import { Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

import FormProvider from '../src/providers/FormProvider'
import QueryProvider from '../src/providers/QueryProvider'
import ThemeProvider from '../src/providers/ThemeProvider'

// Adapted from https://github.com/UnlyEd/next-right-now/blob/e5aba8eaf02918d9506008ee1f11c38954fedc86/.storybook/preview.js

/**
 * Story Global parameters for Storybook.
 *
 * Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.
 * Parameters are applied at the top-level and act as default values.
 *
 * XXX They can be overridden per component and per story.
 *  See https://storybook.js.org/docs/react/writing-stories/parameters#rules-of-parameter-inheritance
 *
 * @see https://storybook.js.org/docs/react/writing-stories/parameters Parameters documentation
 * @see https://github.com/storybookjs/storybook/blob/master/addons/actions/ADVANCED.md#configuration
 * @see https://storybook.js.org/docs/react/essentials/backgrounds#configuration
 *
 * Theme:
 * Configure Storybook theme, using dark by default.
 * You can customise this behavior per story using parameters.
 * Configuring the theme in "manager.js" didn't work out.
 * Also, the "Docs" section is better using the "normal" theme, for readability.
 *
 * @see https://storybook.js.org/docs/react/configure/theming#global-theming Global theming
 * @see https://storybook.js.org/docs/react/configure/theming#theming-docs Per story theming (parameter)
 * @see https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart Creating your own theme
 */

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',

    /**
     * Since Controls is built on the same engine as Storybook Docs, it can also show property documentation alongside your controls using the expanded parameter (defaults to false).
     * We enable this for all stories by default.
     *
     * @see https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
     */
    expanded: true,
  },

  /**
   * Configure stories argTypes for all stories.
   *
   * @deprecated Should not be used at the moment. See https://github.com/storybookjs/storybook/issues/11697
   * @see https://storybook.js.org/docs/react/essentials/controls
   */
  // argTypes: {},

  /**
   * Options.
   * Couldn't find centralized documentation about it.
   */
  options: {
    /**
     * @see https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
     */
    storySort: {
      method: 'alphabetical',
      order: [
        'App', // Should be first
        'Tundera Dev', // Should be second, if kept around
        'Storybook Examples', // Should be last, if kept around
      ],
    },
  },
  docs: {
    theme: themes.normal,
  },
}

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL'],
    },
  },
}

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const nextMode = useColorModeValue('dark', 'light')

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

/**
 * Allow to use Next.js Router in Storybook stories.
 *
 * If you need to customise a component/story, then you should see https://github.com/lifeiscontent/storybook-addon-next-router#as-a-decorator-in-a-story
 * You'll need to specify the Router behavior per-story if the below default config doesn't suit you.
 *
 * @see https://github.com/lifeiscontent/storybook-addon-next-router#usage-in-previewjs
 */
addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
)

/**
 * Decorators in .storybook/preview.js are useful to mock Stories.
 *
 * Like parameters, decorators can be defined globally, at the component level and for a single story (as we’ve seen).
 * All decorators, defined at all levels that apply to a story will run whenever that story is rendered, in the order:
 * - Global decorators, in the order they are defined
 * - Component decorators, in the order they are defined
 * - Story decorators, in the order they are defined.
 *
 * @see https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking
 * @see https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */

const withProviders = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()
  return (
    <QueryProvider>
      <FormProvider>
        <ThemeProvider>
          <div dir={dir} id="story-wrapper" style={{ minHeight: '100vh' }}>
            <ColorModeToggleBar />
            <StoryFn />
          </div>
        </ThemeProvider>
      </FormProvider>
    </QueryProvider>
  )
}
export const decorators = [withProviders]

/**
 * Enables storybook-addon-performance for all stories by default.
 *
 * @see https://github.com/atlassian-labs/storybook-addon-performance#installation
 */
addDecorator(withPerformance)

/**
 * Configure Jest Storybook for all stories.
 *
 * Each story must define which test it's associated to, to show the associated tests results in the preview.
 * See https://github.com/storybookjs/storybook/tree/master/addons/jest#usage
 *
 * @see https://github.com/storybookjs/storybook/tree/master/addons/jest
 */

// try {
//   let testResults
//   testResults = require('../.jest-test-results.json')

//   addDecorator(
//     withTests({
//       results: testResults,
//     }),
//   )
// } catch (err) {
//   console.log(`Couldn't find ../.jest-test-results.json, Jest tests might not work properly.`)
// }
