import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface TextProps {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  className?: string
  [key: string]: any
}

const Text: React.FC<TextProps> = ({ as: Tag = 'div', children, className, ...props }) => {
  return (
    <Tag className={clsx('tracking-tight antialiased transform scale-y-95', className)} {...props}>
      {children}
    </Tag>
  )
}

export default Text
