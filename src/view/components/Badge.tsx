import { cn } from "../../utils/cn"

interface BadgeProps {
  variant: 'orange' | 'purple' | 'green' | 'blue'
}

export function Badge({ variant }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-5 py-1 rounded-lg text-xs font-medium border',
      `${variant === 'blue' && 'border-[#0095FF] bg-blue-50 text-[#0095FF]'}`,
      `${variant === 'orange' && 'border-[#FF8F0D] bg-orange-50 text-[#FF8F0D]'}`,
      `${variant === 'green' && 'border-[#00E096] bg-green-50 text-[#00E096]'}`,
      `${variant === 'purple' && 'border-[#884DFF] bg-purple-50 text-[#884DFF]'}`,
    )}>
      {
        variant === 'orange' ? '25%' :
          variant === 'purple' ? '18%' :
            variant === 'blue' ? '45%' :
              variant === 'green' && '29%'
      }
    </span>
  )
}