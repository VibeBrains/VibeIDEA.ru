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

/** Sibling products of the family section: product names, the same in every language */
export const siblings = { vibeide: 'VibeIDE', vibememory: 'VibeMemory' } as const

/**
 * App icons of the family, copied as they ship — a redrawn mark drifts from the real one:
 * VibeIDEA's from vibeidea-customization/resources/vibeidea.svg of its repository
 * VibeIDE's from resources/darwin/code.icns of its repository
 * VibeMemory's from public/favicon.svg of vibememory.ru
 */
export const brandIcons = {
  vibeidea: '/brands/vibeidea.svg',
  vibeide: '/brands/vibeide.png',
  vibememory: '/brands/vibememory.svg',
} as const

/** Agents the IDE starts over ACP: product names, the same in every language */
export const acpAgents = ['Claude Code', 'Codex', 'Gemini CLI'] as const
