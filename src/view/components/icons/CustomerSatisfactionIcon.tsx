interface CustomerSatisfactionIconProps {
  stroke: string
  fill: string
}

export function CustomerSatisfactionIcon({
  stroke,
  fill,
}: CustomerSatisfactionIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={9}
      viewBox="0 0 23 9"
      fill="none"
    >
      <path
        d="M2 4.5H21"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx="11.5" cy="4.5" r="4.5" fill={fill} />
    </svg>
  )
}
