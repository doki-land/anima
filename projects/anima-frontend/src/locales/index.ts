import enUs from './en-us.ftl?raw';
import zhHans from './zh-hans.ftl?raw';
import zhHant from './zh-hant.ftl?raw';
import {createFluentVue} from 'fluent-vue'
import {FluentBundle, FluentResource} from '@fluent/bundle'
import {negotiateLanguages} from '@fluent/langneg'

// 初始化语言包
const enBundle = new FluentBundle('en-US');
enBundle.addResource(new FluentResource(enUs));

const zhHansBundle = new FluentBundle('zh-Hans');
zhHansBundle.addResource(new FluentResource(zhHans));

const zhHantBundle = new FluentBundle('zh-Hant');
zhHantBundle.addResource(new FluentResource(zhHant));

const fluentVue = createFluentVue({
  bundles: [enBundle, zhHansBundle, zhHantBundle] // 配置 bundles
})

export default fluentVue