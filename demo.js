import '@okalit/demo-components';
import './src/liapf-badge.js';

const demo = document.querySelector('#demo');

demo.setComponents([
  {
    name: 'LiapfBadge',
    tag: 'liapf-badge',
    description: 'A component description',
    import: () => import('./src/liapf-badge.js'),
    props: [
      { variant: { type: String, value: "solid" } },
      { color: { type: String, value: "primary" } },
      { size: { type: Number, value: 0.7 } },
    ],
    slots: [
      { name: 'default', content: 'Hello World' },
    ],
    events: [],
    channels: [],
  },
]);
