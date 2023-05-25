import type { SVGProps } from 'react'
export const CopyIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='none'
    {...props}
  >
    <mask
      id='copy_svg__a'
      width={18}
      height={18}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M0 0h18v18H0z' />
    </mask>
    <g mask='url(#copy_svg__a)'>
      <path
        fill='#007AFC'
        d='M3.75 16.5c-.413 0-.766-.147-1.06-.44A1.446 1.446 0 0 1 2.25 15V4.5h1.5V15H12v1.5H3.75Zm3-3c-.412 0-.766-.147-1.059-.44A1.445 1.445 0 0 1 5.25 12V3c0-.413.147-.766.441-1.06.293-.293.647-.44 1.059-.44h6.75c.412 0 .766.147 1.06.44.293.294.44.647.44 1.06v9c0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44H6.75Zm0-1.5h6.75V3H6.75v9Z'
      />
    </g>
  </svg>
)
