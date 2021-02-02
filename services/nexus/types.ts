import type { NextApiRequest, NextApiResponse } from 'next'

import type { NexusGenObjects } from 'services/nexus/generated'

import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}

export type Coach = NexusGenObjects['Coach']
export type Player = NexusGenObjects['Player']
export type Team = NexusGenObjects['Team']
export type ColorScheme = NexusGenObjects['ColorScheme']
