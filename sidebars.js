const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Theme Module',
      items: [
        'theme-module/accessing-theme-module',
        'theme-module/creating-new-theme',
        'theme-module/color-and-typography',
        {
          type: 'category',
          label: 'Colors',
          items: [
            'theme-module/colors/introduction-to-colors', 
            'theme-module/colors/accessing-color-submodule',
            'theme-module/colors/adding-color-to-category',
            'theme-module/colors/adding-new-custom-color',
            'theme-module/colors/info-panel',
          ],
        },
      ],
    },
  ],
};

export default sidebars;