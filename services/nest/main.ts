import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import * as http from 'http'
import { NextApiHandler } from 'next'
import { INestApplication } from '@nestjs/common'
import { AppModule } from './app/app.module'

export module Backend {
  let app: INestApplication

  export async function getApp() {
    if (!app) {
      app = await NestFactory.create(AppModule, { bodyParser: false })
      app.setGlobalPrefix('api/nest')

      await app.init()
    }

    return app
  }

  export async function getListener() {
    const app = await getApp()
    const server: http.Server = app.getHttpServer()
    const [listener] = server.listeners('request') as NextApiHandler[]
    return listener
  }
}
