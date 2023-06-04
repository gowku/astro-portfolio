import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import mdx from '@astrojs/mdx'
import compressor from 'astro-compressor'
import purgecss from 'astro-purgecss'

import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
  site: 'https://frebet-julien.gowkulab.ovh',
  integrations: [
    react(),
    sitemap(),
    robotsTxt(),
    mdx(),
    // critters(),
    compressor(),
    purgecss({
      fontFace: true,
      keyframes: true,
      safelist: ['random', 'yep', 'button', /^nav-/],
      blocklist: ['usedClass', /^nav-/]
    })
  ]
})
