import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  name: t('Mix Line Bar'),
  description: '',
  credits: ['https://www.echartsjs.com/examples/en/editor.html?c=mix-line-bar'],
  thumbnail,
  useLegacyApi: true,
});

export default class MixLineBarChartPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./ReactMixLineBar.js'), // 前端渲染逻辑
    });
  }
}
