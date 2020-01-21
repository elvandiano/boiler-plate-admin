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
          name: 'Form',
          url: '/form',
          icon: 'fa fa-clipboard'
        },
        {
          name: 'Alert',
          url: '/alert',
          icon: 'fa fa-bell'
        },
        {
          name: 'Tabs',
          url: '/tabs',
          icon: 'fa fa-book'
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
