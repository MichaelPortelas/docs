module.exports = {
  docs: [
    'intro',
    'requirements',
    'download',
    {
      type: 'category',
      label: 'Concepts',
      items: [   
        'concepts/basics',
        'concepts/finances',
      ]
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'installation/uploading',
        'installation/vhost',
        'installation/installation',
        'installation/cron',
        'installation/importing',
        'installation/updating',
        'installation/issues',
      ]
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'config/files',
        'config/email',
        'config/optimizing',
        'config/notifications',
      ]
    },
    {
      type: 'category',
      label: 'Themes and Layouts',
      items: [
        'customize/layouts',
        'customize/theming',
        'customize/maps',
      ]
    },
    {
      type: 'category',
      label: 'Developers',
      items: [
        'developers/environment',
        'developers/building-assets',
        'developers/addons',
        'developers/awards',
      ]
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/auth',
        'api/apis',
      ]
    },
    {
      type: 'category',
      label: 'ACARS',
      items: [
        'acars/overview',
        'acars/eula',
        'acars/install-server',
        'acars/install-client',
        'acars/customization',
        {
          type: 'category',
          label: 'Flight Details',
          items: [
            'acars/flight',
            'acars/phases',
          ]
        },
        'acars/configmaps',
      ]
    },
    'help',
  ]
};
