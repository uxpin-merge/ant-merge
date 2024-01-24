module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.jsx',
          'src/components/FloatButton/FloatButton.jsx',
          'src/components/FloatButton/Group/Group.jsx',
          'src/components/FloatButton/BackTop/BackTop.jsx',
          'src/components/Icon/Icon.jsx',
          'src/components/Typography/Typography.jsx',
          'src/components/Typography/Text/Text.jsx',
          'src/components/Typography/Link/Link.jsx',
          'src/components/Typography/Title/Title.jsx',
          'src/components/Typography/Paragraph/Paragraph.jsx',

        ]
      },
      {
        name: 'Layout',
        include: [
          'src/components/Divider/Divider.jsx',
          'src/components/Flex/Flex.jsx',
          'src/components/Col/Col.jsx',
          'src/components/Row/Row.jsx',
          'src/components/Layout/Layout.jsx',
          'src/components/Layout/Header/Header.jsx',
          'src/components/Layout/Sider/Sider.jsx',
          'src/components/Layout/Footer/Footer.jsx',
          'src/components/Layout/Content/Content.jsx',
          'src/components/Space/Space.jsx',
          'src/components/Space/Compact/Compact.jsx',
        ]
      },
      {
        name: 'Navigation',
        include: [
          'src/components/Anchor/Anchor.jsx',
          // 'src/components/AnchorItem/AnchorItem.jsx',
          'src/components/Breadcrumb/Breadcrumb.jsx',
          'src/components/Breadcrumb/Item/Item.jsx',

          // 'src/components/Dropdown/Dropdown.jsx',
          // 'src/components/Menu/Menu.jsx',
          'src/components/Pagination/Pagination.jsx',
          'src/components/Steps/Steps.jsx',
          'src/components/Steps/Item/Item.jsx',
        ]
      },
      {
        name: 'Data Display',
        include: [
          'src/components/Avatar/Avatar.jsx',
          'src/components/Avatar/Group/Group.jsx',
          'src/components/Badge/Badge.jsx',
          'src/components/Badge/Ribbon/Ribbon.jsx',
          'src/components/Card/Card.jsx',
          'src/components/Card/Grid/Grid.jsx',
          'src/components/Carousel/Carousel.jsx',
          'src/components/Collapse/Collapse.jsx',
          'src/components/Collapse/Panel/Panel.jsx',
          'src/components/Descriptions/Descriptions.jsx',
          'src/components/Descriptions/Item/Item.jsx',
          'src/components/Calendar/Calendar.jsx',
          'src/components/Empty/Empty.jsx',
          'src/components/Image/Image.jsx',
          'src/components/List/List.jsx',
          'src/components/List/Item/Item.jsx',
          'src/components/Popover/Popover.jsx',
          'src/components/QRCode/QRCode.jsx',
          'src/components/Segmented/Segmented.jsx',
          'src/components/Statistic/Statistic.jsx',

          //--- 'src/components/Table.jsx',


          'src/components/Tabs/Tabs.jsx',
          'src/components/Tabs/TabPane/TabPane.jsx',
          'src/components/Tag/Tag.jsx',
          'src/components/Timeline/Timeline.jsx',
          'src/components/Timeline/Item/Item.jsx',
          'src/components/Tooltip/Tooltip.jsx',

          'src/components/Tour/Tour.jsx',
          // 'src/components/Tour/Step/Step.jsx',
          //--- 'src/components/Tree.jsx',



        ]
      },

      {
        name: 'Data Entry',
        include: [
          'src/components/Checkbox/Checkbox.jsx',
          'src/components/Checkbox/Group/Group.jsx',
          'src/components/ColorPicker/ColorPicker.jsx',
          'src/components/InputNumber/InputNumber.jsx',
          'src/components/Rate/Rate.jsx',
          'src/components/Slider/Slider.jsx',
          'src/components/Switch/Switch.jsx',
          // AutoComplete
          // Cascader
          // DatePicker
          // Form
          // Input
          // 
          // Mentions
          // Radio
          // 
          // Select
          // 
          // 
          // TimePicker
          // Transfer
          // TreeSelect
          // Upload
        ]
      },




    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'ANT-UXPin-Merge',
};
