/** Product repository on GitHub: releases, sources and issues live there */
export const REPO = 'VibeBrains/VibeIDEA'

const GITHUB = `https://github.com/${REPO}`

/** Outbound links of the landing, one source for header, sections and footer */
export const links = {
  github: GITHUB,
  releases: `${GITHUB}/releases`,
  issues: `${GITHUB}/issues`,
  functional: `${GITHUB}/blob/main/docs/vibe/functional.md`,
  vibeide: 'https://vibeide.ru',
  vibememory: 'https://vibememory.ru',
} as const

/** localStorage key that remembers the language the visitor picked explicitly */
export const LANG_STORAGE_KEY = 'vibeidea.lang'

/** Agents the IDE starts over ACP: product names, the same in every language */
export const acpAgents = ['Claude Code', 'Codex', 'Gemini CLI'] as const
