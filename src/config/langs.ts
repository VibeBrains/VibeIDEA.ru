/**
 * Languages the IDE serves out of the box, each with the server that ships inside the build
 * They ride the faces of the rotating prism; names are product and language names, the same in every language
 */
export const langs = [
  { name: 'PHP', server: 'Phpactor' },
  { name: 'TypeScript', server: 'vtsls' },
  { name: 'JavaScript', server: 'vtsls' },
  { name: 'CSS · LESS', server: 'vscode-css' },
  { name: 'SCSS · Sass', server: 'some-sass' },
  { name: 'Tailwind', server: 'tailwindcss' },
  { name: 'Vue', server: 'vue' },
  { name: 'Svelte', server: 'svelte' },
  { name: 'Astro', server: 'astro' },
  { name: 'Angular', server: 'angular' },
  { name: 'Stylus', server: 'stylus-lsp' },
  { name: 'ESLint', server: 'vscode-eslint' },
] as const
