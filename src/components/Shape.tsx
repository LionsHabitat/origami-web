import { ArrowLongUpIcon } from '@heroicons/react/24/outline'
import type { ReactNode } from 'react'

import { cx } from '@/utils'

export type ShapeProps = {
  title: string
  children?: ReactNode
  className?: string
  [key: string]: any
}

const Shape = ({
  title,
  children,
  className,
  ...rest
}: ShapeProps): ReactNode => (
  <div className={cx(className, 'text-center cursor-pointer')} {...rest}>
    {children}
    <ArrowLongUpIcon className="mx-auto mt-2 h-14 text-gray-900" />
    <span className="text-2xl text-gray-900">{title}</span>
  </div>
)

export default Shape
