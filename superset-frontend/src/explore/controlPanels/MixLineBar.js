/**
 *   https://www.echartsjs.com/examples/zh/editor.html?c=mix-line-bar
 *   mix line bar
 */
import { t } from '@superset-ui/core';

export default {
  requiresTime: true,
  controlPanelSections: [
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [['color_scheme', 'label_colors']],
    },
    {
      label: t('X Axis'),
      expanded: true,
      controlSetRows: [['groupby']],
    },
    {
      label: t('Line Type'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'line_metrics',
            config: {
              type: 'MetricsControl',
              multi: true,
              label: 'line 指标',
              description: t('One or many metrics to display'),
              default: '',
              mapStateToProps: state => {
                const { datasource } = state;
                return {
                  columns: datasource ? datasource.columns : [],
                  savedMetrics: datasource ? datasource.metrics : [],
                  datasourceType: datasource && datasource.type,
                };
              },
            },
          },
        ],
      ],
    },
    {
      label: t('Bar Type'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'bar_metrics',
            config: {
              type: 'MetricsControl',
              multi: true,
              label: 'bar 指标',
              description: t('One or many metrics to display'),
              default: '',
              mapStateToProps: state => {
                const { datasource } = state;
                return {
                  columns: datasource ? datasource.columns : [],
                  savedMetrics: datasource ? datasource.metrics : [],
                  datasourceType: datasource && datasource.type,
                };
              },
            },
          },
        ],
      ],
    },
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['adhoc_filters'],
        ['row_limit'],
        ['limit'],
        [
          {
            name: 'script',
            config: {
              type: 'TextAreaControl',
              label: 'Event Script',
              description: t(
                'Put your code here, for example："alert(JSON.stringify(element, null, 4))"',
              ),
              default: '',
            },
          },
        ],
      ],
    },
  ],
  controlOverrides: {},
};
