export default {
  items: [
    {
      name: 'Chart',
      url: '/chart',
      icon: 'fa fa-pie-chart'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'fa fa-bars',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/breadcrumbs',
          icon: 'fa fa-bars'
        },
        {
          name: 'Cards',
          url: '/cards',
          icon: 'fa fa-bars'
        },
        {
          name: 'Collapses',
          url: '/collapses',
          icon: 'fa fa-bars'
        },
        {
          name: 'Embed',
          url: '/embed',
          icon: 'fa fa-bars'
        },
        {
          name: 'Form Checkbox',
          url: '/checkbox',
          icon: 'fa fa-bars'
        },
        {
          name: 'Form File',
          url: '/upload-file',
          icon: 'fa fa-bars'
        },
        {
          name: 'Form Input',
          url: '/form',
          icon: 'fa fa-bars'
        },
        {
          name: 'Alert',
          url: '/alert',
          icon: 'fa fa-bars'
        },
        {
          name: 'Tabs',
          url: '/tabs',
          icon: 'fa fa-bars'
        },
        {
          name: 'Icons',
          url: '/icons',
          icon: 'fa fa-bars'
        },
        {
          name: 'Loader',
          url: '/loader',
          icon: 'fa fa-bars'
        },
        {
          name: 'Modal',
          url: '/modal',
          icon: 'fa fa-bars'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'fa fa-cube',
      children: [
        {
          name: 'Standard Buttons',
          url: '/buttons',
          icon: 'fa fa-cube'
        },
        {
          name: 'Buttons Dropdown',
          url: '/buttons-dropdown',
          icon: 'fa fa-cube'
        },
        {
          name: 'Buttons Group',
          url: '/buttons-group',
          icon: 'fa fa-cube'
        }
      ]
    },
    {
      name: 'Table',
      url: '/table',
      icon: 'fa fa-table'
    },
    {
      divider: true
    }
  ]
}
