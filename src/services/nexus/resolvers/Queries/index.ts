import * as User from './User'
import * as Post from './Post'
import * as Coach from './Coach'
import * as Player from './Player'
import * as Team from './Team'
import * as ColorScheme from './ColorScheme'

export const Query = {
  ...User,
  ...Post,
  ...Coach,
  ...Player,
  ...Team,
  ...ColorScheme,
}
