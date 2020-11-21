import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      heliotrope: string,
      bittersweet: string,
      deepBlush: string,
      white: string,
      mineShaft: string,
      scorpion: string,
      translucide: string
    }
  }
}