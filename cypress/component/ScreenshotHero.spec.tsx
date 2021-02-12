import { mount } from '@cypress/react'
import ScreenshotHero from '../../src/components/sections/heros/ScreenshotHero'

describe('HelloWorld component', () => {
  it('works', () => {
    mount(<ScreenshotHero />)
  })
})
