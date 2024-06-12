import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node, // Node.js globals
        ...globals.browser // Browser globals
      },
    },
  },
  pluginJs.configs.recommended, // Applying recommended rules from @eslint/js
];