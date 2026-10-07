import { initReveal } from '@vibebrains/site-kit/scripts/reveal'
import { initLangMemory } from '@vibebrains/site-kit/scripts/langMemory'
import { initLiveReleases } from '@vibebrains/site-kit/scripts/liveReleases'
import { initTilt } from '@vibebrains/site-kit/scripts/tilt'
import { KINDS, OSES, RELEASES_API, RELEASES_SHOWN } from '../config/releases'
import { LANG_STORAGE_KEY } from '../config/site'

initReveal()
initLangMemory(LANG_STORAGE_KEY)
initLiveReleases({ api: RELEASES_API, kinds: KINDS, oses: OSES, shown: RELEASES_SHOWN })
initTilt()
