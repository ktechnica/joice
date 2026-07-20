import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    // https://unocss.dev/presets/wind4
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
  ],
})
