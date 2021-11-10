import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism' // darcula , okaidia


export const CodeHighlighter = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" children={children[0]} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    }
}