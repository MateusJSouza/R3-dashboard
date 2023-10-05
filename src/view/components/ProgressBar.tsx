import { cn } from "../../utils/cn"

interface ProgressBarProps {
  variant: 'orange' | 'purple' | 'green' | 'blue'
}

export function ProgressBar({ variant }: ProgressBarProps) {
  return (
    <div className={cn(
      'w-full h-1 rounded-full',
      `${variant === 'blue' && 'bg-[#CDE7FF]'}`,
      `${variant === 'orange' && 'bg-[#FFD5A4]'}`,
      `${variant === 'green' && 'bg-[#8CFAC7]'}`,
      `${variant === 'purple' && 'bg-[#C5A8FF]'}`,
    )}>

      <div className={cn(
        'w-3/4 h-full rounded-full',
        `${variant === 'blue' && 'bg-[#0095FF]'}`,
        `${variant === 'orange' && 'bg-[#FF8F0D]'}`,
        `${variant === 'green' && 'bg-[#00E096]'}`,
        `${variant === 'purple' && 'bg-[#884DFF]'}`,
      )}
      />
    </div>
  )
}