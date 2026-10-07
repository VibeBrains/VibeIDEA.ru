import { join } from 'node:path'
import { localeGate } from '@vibebrains/site-kit/gate'
import { productNames } from '@vibebrains/site-kit/brands'
import ru from '../src/locales/ru.json'
import en from '../src/locales/en.json'
import { acpAgents } from '../src/config/site'
import { langs } from '../src/config/langs'

localeGate({
  root: join(import.meta.dir, '..'),
  catalogs: { ru, en },
  // Data that is the same in every language and is not interface text: product, language and server names
  data: [...acpAgents, ...Object.values(productNames), ...langs.flatMap((item) => [item.name, item.server])],
})
