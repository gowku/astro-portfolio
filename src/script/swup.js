import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupScriptsPlugin from '@swup/scripts-plugin'
import SwupSlideTheme from '@swup/slide-theme'

const swup = new Swup({
  // cache: false,
  plugins: [
    new SwupHeadPlugin(),
    new SwupBodyClassPlugin(),
    new SwupScriptsPlugin({ head: false, body: true, optin: false }),
    new SwupSlideTheme()
  ]
})
