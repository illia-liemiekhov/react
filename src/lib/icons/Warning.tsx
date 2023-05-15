import type { SVGProps } from 'react'
export const WarningIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='mask0_878_77289'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='24'
      height='24'
    >
      <rect width='24' height='24' fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_878_77289)'>
      <path
        d='M1 21L12 2L23 21H1ZM12 18C12.2833 18 12.521 17.904 12.713 17.712C12.9043 17.5207 13 17.2833 13 17C13 16.7167 12.9043 16.4793 12.713 16.288C12.521 16.096 12.2833 16 12 16C11.7167 16 11.4793 16.096 11.288 16.288C11.096 16.4793 11 16.7167 11 17C11 17.2833 11.096 17.5207 11.288 17.712C11.4793 17.904 11.7167 18 12 18ZM11 15H13V10H11V15Z'
        fill='#F3980F'
      />
    </g>
  </svg>
)
