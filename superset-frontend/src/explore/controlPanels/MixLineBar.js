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
      controlSetRows: [['line_metrics']],
    },
    {
      label: t('Bar Type'),
      expanded: true,
      controlSetRows: [['bar_metrics']],
    },
    {
      label: t('Real Y Axis 2 Display Columns'),
      expanded: true,
      controlSetRows: [['right_y_column']],
    },

    {
      label: t('Y Axis 1 Scale Value Setting'),
      expanded: true,
      controlSetRows: [
        ['left_y_min', 'left_y_max', 'left_y_interval'],
        ['y_axis_label'],
      ],
    },
    {
      label: t('Y Axis 2 Scale Value Setting'),
      expanded: true,
      controlSetRows: [
        ['right_y_min', 'right_y_max', 'right_y_interval'],
        ['y_axis_2_label'],
      ],
    },
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [['adhoc_filters']],
    },
  ],
  controlOverrides: {},
};
