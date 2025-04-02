import { createFluentVue } from 'fluent-vue'
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { negotiateLanguages } from '@fluent/langneg'

const supportedLocales = ['en-US', 'zh-HANS', 'zh-HANT']
const defaultLocale = 'zh-HANS'

const userLocales = navigator.languages || [defaultLocale]
const currentLocale = negotiateLanguages(userLocales, supportedLocales, { defaultLocale })[0]

const bundle = new FluentBundle(currentLocale)
const resource = new FluentResource(`
hello = Hello, world!
`)
bundle.addResource(resource)

const fluentVue = createFluentVue({
  bundles: [bundle]
})

export default fluentVue