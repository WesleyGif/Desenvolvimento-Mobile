import 'styled-components'

import colors from './colors'
import fonts from './typography'
import spacing from './spacing'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors,
    fonts: typeof fonts,
    spacing: typeof spacing
  }
}
