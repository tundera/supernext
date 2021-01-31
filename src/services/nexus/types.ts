import type { NextApiRequest, NextApiResponse } from 'next'

import type { NexusGenObjects } from 'src/services/nexus/generated'

import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
  userId: number
}

export interface Token {
  userId: number
  type: string
  timestamp: number
}

export type Coach = NexusGenObjects['Coach']
export type Player = NexusGenObjects['Player']
export type Team = NexusGenObjects['Team']
export type ColorScheme = NexusGenObjects['ColorScheme']
