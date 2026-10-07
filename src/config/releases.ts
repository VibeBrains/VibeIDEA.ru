import type { KindRule } from '@vibebrains/site-kit/releases'
import { releasesApi } from '@vibebrains/site-kit/releases'
import { REPO } from './site'

/**
 * VibeIDEA builds: the repository also carries upstream releases (pycharm/…), the kit keeps only `vX.Y.Z` tags
 * Each platform has one installer kind; Windows also has a ZIP, the installer wins
 */
export const RELEASES_API = releasesApi(REPO, 30)

export type Os = 'macos' | 'windows' | 'linux'

export type AssetKind = 'dmg' | 'exe' | 'winZip' | 'tarGz'

export const KINDS: readonly KindRule<AssetKind, Os>[] = [
  { kind: 'dmg', os: 'macos', test: /\.dmg$/i },
  { kind: 'exe', os: 'windows', test: /\.exe$/i },
  { kind: 'winZip', os: 'windows', test: /\.win\.zip$/i },
  { kind: 'tarGz', os: 'linux', test: /\.tar\.gz$/i },
]

/** Platforms with a download button, in the order of the buttons */
export const OSES: readonly Os[] = ['macos', 'windows', 'linux']

/** How many releases the releases panel lists */
export const RELEASES_SHOWN = 3
