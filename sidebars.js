const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Theme Module',
      items: [
        'theme-module/accessing-theme-module',
        'theme-module/color-and-typography',
        'theme-module/creating-new-theme',
        {
          type: 'category',
          label: 'Colors',
          items: [
            'theme-module/colors/introduction-to-colors',
          ],
        },
      ],
    },
  ],
};

export default sidebars;