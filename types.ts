import type { NextPage as DefaultNextPage, NextComponentType as DefaultNextComponentType, NextPageContext } from 'next'
import type { AppProps as NextAppProps } from 'next/app'

export declare type NextComponentType<C = NextPageContext, IP = {}, P = {}> = DefaultNextComponentType<C, IP, P>

export interface AppProps<P = {}> extends NextAppProps<P> {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout?: (component: JSX.Element) => JSX.Element
  }
}

export declare type NextPage<P = {}, IP = P> = DefaultNextPage<P, IP> & {
  getLayout?: (component: JSX.Element) => JSX.Element
}
