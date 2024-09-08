import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  lessons_sidebar: [
    {
      type: 'category',
      label: 'Bases informatique',
      items: [
        {
          type: 'autogenerated',
          dirName: 'bases_info'
        },
      ]
    },
    {
      type: 'category',
      label: 'Systèmes d\'Information',
      items: [
        {
          type: 'autogenerated',
          dirName: 'si'
        },
      ]
    },
    {
      type: 'category',
      label: 'Agilité',
      items: [
        {
          type: 'autogenerated',
          dirName: 'agile'
        },
      ]
    },
    {
      type: 'category',
      label: 'UI/UX',
      items: [
        {
          type: 'autogenerated',
          dirName: 'ui_ux'
        },
      ]
    },
  ],
};

export default sidebars;
