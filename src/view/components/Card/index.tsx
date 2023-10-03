import { ElementType } from 'react'
import { cn } from '../../../utils/cn'

interface CardProps {
  title: string
  value: string
  icon: ElementType
  percentage: string
  className?: string
}

export function Card({
  icon: Icon,
  title,
  value,
  percentage,
  className,
}: CardProps) {
  return (
    <section className={cn('flex flex-col rounded-2xl p-5', className)}>
      <Icon className="h-10 w-10" />

      <p className="text-greys-900 mt-4 text-2xl font-semibold leading-8">
        {value}
      </p>

      <span className="mt-2 font-medium leading-6 text-gray-500">{title}</span>

      <span className="text-primary-800 mt-2 text-xs font-medium leading-4">
        +{percentage}% from yearsterday
      </span>
    </section>
  )
}
