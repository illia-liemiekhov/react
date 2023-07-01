/** @type {import('@svgr/core').Config} */
module.exports = {
  typescript: true,
  jsxRuntime: 'automatic',
  expandProps: 'none',
  template: (variables, { tpl }) => {
    return tpl`
/*
* Automaically generated by SVGR from assets/icons/*.svg.
* Do not edit this file or add other components to this directory.
*/
import type { SVGProps } from 'react'

${variables.interfaces};

export const ${variables.componentName.replace('Svg', '') + 'Icon'} = (${
      variables.props
    }): JSX.Element => (
  ${variables.jsx}
);
`
  },
  indexTemplate: () => {
    return 'export default null'
  },
}
