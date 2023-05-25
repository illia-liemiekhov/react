import type { SVGProps } from 'react'
export const LockLockedIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={25}
    fill='none'
    {...props}
  >
    <mask
      id='lock-locked_svg__a'
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M.461.839h24v24h-24z' />
    </mask>
    <g mask='url(#lock-locked_svg__a)'>
      <path
        fill='#232B3A'
        fillRule='evenodd'
        d='M5.924 3.893a4.463 4.463 0 0 0-4.463 4.464v3.345a1 1 0 1 0 2 0V8.357a2.463 2.463 0 0 1 4.926 0v4.482H7.72a1.26 1.26 0 0 0-1.26 1.259v5.481c0 .696.565 1.26 1.26 1.26h9.481a1.26 1.26 0 0 0 1.26-1.26v-5.481a1.26 1.26 0 0 0-1.26-1.26h-6.814V8.357a4.463 4.463 0 0 0-4.463-4.464Z'
        clipRule='evenodd'
      />
    </g>
  </svg>
)
