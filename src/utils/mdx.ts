import type { ReactNode } from 'react'
import type { MdxRemote } from 'next-mdx-remote/types'

import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { mdxComponents } from '@components/mdx'

export async function mdxToString(mdx: string, components?: ReactNode[]) {
  return await renderToString(mdx, {
    components: {
      ...mdxComponents,
      ...components,
    },
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-toc'),
        require('remark-external-links'),
      ],
      rehypePlugins: [require('rehype-autolink-headings')],
      compilers: [],
    },
  })
}

export function stringToMdx(string: MdxRemote.Source, components?: MdxRemote.Components) {
  return hydrate(string, {
    components: {
      ...mdxComponents,
      ...components,
    },
  })
}

export function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation
    const { children: codeString, className = '', ...props } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : '',
      ...props,
    }
  }
  return undefined
}
