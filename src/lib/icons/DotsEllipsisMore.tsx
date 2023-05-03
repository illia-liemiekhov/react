import type { ReactNode, SVGProps } from 'react'
export const DotsEllipsisMoreIcon = (
  props: SVGProps<SVGSVGElement>
): ReactNode => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={18}
    fill='none'
    {...props}
  >
    <mask
      id='dots-ellipsis-more_svg__a'
      width={18}
      height={18}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#2196F3' d='M0 0h18v18H0z' />
    </mask>
    <g mask='url(#dots-ellipsis-more_svg__a)'>
      <path
        fill='#007AFC'
        d='M4.5 10.5c-.412 0-.766-.147-1.06-.44A1.445 1.445 0 0 1 3 9c0-.412.147-.766.44-1.06.294-.293.648-.44 1.06-.44.412 0 .766.147 1.06.44.293.294.44.647.44 1.06 0 .412-.147.766-.44 1.06-.294.293-.647.44-1.06.44Zm4.5 0c-.412 0-.766-.147-1.06-.44A1.444 1.444 0 0 1 7.5 9c0-.412.147-.766.44-1.06.294-.293.647-.44 1.06-.44.412 0 .766.147 1.06.44.293.294.44.647.44 1.06 0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44Zm4.5 0c-.412 0-.766-.147-1.06-.44A1.445 1.445 0 0 1 12 9c0-.412.147-.766.44-1.06.294-.293.648-.44 1.06-.44.412 0 .766.147 1.06.44.293.294.44.647.44 1.06 0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44Z'
      />
    </g>
  </svg>
)
