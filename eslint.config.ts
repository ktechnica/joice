import { antfu } from '@antfu/eslint-config'

// https://github.com/antfu/eslint-config
export default antfu({
  // https://github.com/e18e/eslint-plugin#rules
  e18e: true,

  // https://www.npmjs.com/package/eslint-plugin-pnpm#rules
  pnpm: true,

  // https://eslint.style/rules
  stylistic: {
    overrides: {
      'style/function-paren-newline': ['error', 'consistent'],
    },
  },

  // https://github.com/sindresorhus/eslint-plugin-unicorn#rules
  unicorn: true,

  // https://unocss.dev/integrations/eslint#rules
  unocss: true,

  // https://eslint.vuejs.org/rules/
  vue: true,
})
