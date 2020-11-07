import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string,
      white: string,
      whiteSmoke: string,
      tundora: string,
      mineShaft: string,
      doveGray: string,
      translucid: string
    }
  }
}