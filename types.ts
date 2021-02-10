import type { NextPage, NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'

export declare type CustomNextComponentType<C = NextPageContext, IP = {}, P = {}> = NextComponentType<C, IP, P>

export interface CustomAppProps<P = {}> extends AppProps<P> {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout?: (component: JSX.Element) => JSX.Element
  }
}

export declare type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (component: JSX.Element) => JSX.Element
}
