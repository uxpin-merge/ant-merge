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
          //--- 
          // 
          // 
          //--- 'src/components/Descriptions.jsx',

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

          //--- 'src/components/Tour.jsx',
          //--- 'src/components/Tree.jsx',



        ]
      },


      // {
      //   name: 'Components',
      //   include: [
      //    /* PLOP_INJECT_IMPORT */
      //    'src/components/Watermark/Watermark.jsx',
      //    'src/components/UploadUploadFile/UploadUploadFile.jsx',
      //    'src/components/Upload/Upload.jsx',
      //    'src/components/TypographyEllipsis/TypographyEllipsis.jsx',
      //    'src/components/TypographyEditable/TypographyEditable.jsx',
      //    'src/components/TypographyCopyable/TypographyCopyable.jsx',
      //    'src/components/TypographyParagraph/TypographyParagraph.jsx',
      //    'src/components/TypographyTitle/TypographyTitle.jsx',
      //    'src/components/TypographyText/TypographyText.jsx',
      //    'src/components/Typography/Typography.jsx',
      //    'src/components/TreeSelect/TreeSelect.jsx',
      //    'src/components/Tree/Tree.jsx',
      //    'src/components/Transfer/Transfer.jsx',
      //    'src/components/TourTourStep/TourTourStep.jsx',
      //    'src/components/Tour/Tour.jsx',
      //    'src/components/Tooltip/Tooltip.jsx',
      //    'src/components/Timeline/Timeline.jsx',
      //    'src/components/TimePicker/TimePicker.jsx',
      //    'src/components/TagCheckableTag/TagCheckableTag.jsx',
      //    'src/components/Tag/Tag.jsx',
      //    'src/components/TabsTabItemType/TabsTabItemType.jsx',
      //    'src/components/Tabs/Tabs.jsx',
      //    'src/components/Table/Table.jsx',
      //    'src/components/Switch/Switch.jsx',
      //    'src/components/StepsStepItem/StepsStepItem.jsx',
      //    'src/components/Steps/Steps.jsx',
      //    'src/components/Statistic/Statistic.jsx',
      //    'src/components/Spin/Spin.jsx',
      //    'src/components/SpaceCompact/SpaceCompact.jsx',
      //    'src/components/Space/Space.jsx',
      //    'src/components/Slider/Slider.jsx',
      //    'src/components/SkeletonInput/SkeletonInput.jsx',
      //    'src/components/SkeletonButton/SkeletonButton.jsx',
      //    'src/components/SkeletonParagraph/SkeletonParagraph.jsx',
      //    'src/components/SkeletonTitle/SkeletonTitle.jsx',
      //    'src/components/SkeletonAvatar/SkeletonAvatar.jsx',
      //    'src/components/Skeleton/Skeleton.jsx',
      //    'src/components/SelectOptGroup/SelectOptGroup.jsx',
      //    'src/components/SelectOption/SelectOption.jsx',
      //    'src/components/Select/Select.jsx',
      //    'src/components/Segmented/Segmented.jsx',
      //    'src/components/Row/Row.jsx',
      //    'src/components/Result/Result.jsx',
      //    'src/components/Rate/Rate.jsx',
      //    'src/components/RadioGroup/RadioGroup.jsx',
      //    'src/components/Radio/Radio.jsx',
      //    'src/components/QrCode/QrCode.jsx',
      //    'src/components/Progress/Progress.jsx',
      //    'src/components/Popover/Popover.jsx',
      //    'src/components/Popconfirm/Popconfirm.jsx',
      //    'src/components/Pagination/Pagination.jsx',
      //    'src/components/Notification/Notification.jsx',
      //    'src/components/Modal/Modal.jsx',
      //    'src/components/Message/Message.jsx',
      //    'src/components/MenuMenuDividerType/MenuMenuDividerType.jsx',
      //    'src/components/MenuSubMenuType/MenuSubMenuType.jsx',
      //    'src/components/MenuMenuItemType/MenuMenuItemType.jsx',
      //    'src/components/Menu/Menu.jsx',
      //    'src/components/Mentions/Mentions.jsx',
      //    'src/components/ListItemMeta/ListItemMeta.jsx',
      //    'src/components/ListItem/ListItem.jsx',
      //    'src/components/List/List.jsx',
      //    'src/components/LayoutSider/LayoutSider.jsx',
      //    'src/components/Layout/Layout.jsx',
      //    'src/components/InputNumber/InputNumber.jsx',
      //    'src/components/InputPassword/InputPassword.jsx',
      //    'src/components/InputSearch/InputSearch.jsx',
      //    'src/components/InputTextArea/InputTextArea.jsx',
      //    'src/components/Input/Input.jsx',
      //    'src/components/ImagePreviewType/ImagePreviewType.jsx',
      //    'src/components/Image/Image.jsx',
      //    'src/components/Col/Col.jsx',
      //    'src/components/FormFormInstance/FormFormInstance.jsx',
      //    'src/components/FormErrorList/FormErrorList.jsx',
      //    'src/components/FormList/FormList.jsx',
      //    'src/components/FormItem/FormItem.jsx',
      //    'src/components/Form/Form.jsx',
      //    'src/components/Flex/Flex.jsx',
      //    'src/components/Empty/Empty.jsx',
      //    'src/components/DropdownButton/DropdownButton.jsx',
      //    'src/components/Dropdown/Dropdown.jsx',
      //    'src/components/Drawer/Drawer.jsx',
      //    'src/components/Divider/Divider.jsx',
      //    'src/components/DescriptionsDescriptionItem/DescriptionsDescriptionItem.jsx',
      //    'src/components/Descriptions/Descriptions.jsx',
      //    'src/components/DatePicker/DatePicker.jsx',
      //    'src/components/ConfigProvider/ConfigProvider.jsx',
      //    'src/components/ColorPickerColor/ColorPickerColor.jsx',
      //    'src/components/ColorPicker/ColorPicker.jsx',
      //    'src/components/CollapsePanel/CollapsePanel.jsx',
      //    'src/components/Collapse/Collapse.jsx',
      //    'src/components/Checkbox/Checkbox.jsx',
      //    'src/components/Cascader/Cascader.jsx',
      //    'src/components/Carousel/Carousel.jsx',
      //    'src/components/CardGrid/CardGrid.jsx',
      //    'src/components/CardMeta/CardMeta.jsx',
      //    'src/components/Card/Card.jsx',
      //    'src/components/Calendar/Calendar.jsx',
      //    'src/components/Button/Button.jsx',
      //    'src/components/Breadcrumb/Breadcrumb.jsx',
      //    'src/components/BadgeRibbon/BadgeRibbon.jsx',
      //    'src/components/Badge/Badge.jsx',
      //    'src/components/BackTop/BackTop.jsx',
      //    'src/components/AvatarGroup/AvatarGroup.jsx',
      //    'src/components/Avatar/Avatar.jsx',
      //    'src/components/AutoComplete/AutoComplete.jsx',
      //    'src/components/App/App.jsx',
      //    'src/components/AnchorLink/AnchorLink.jsx',
      //    'src/components/AnchorAnchorItem/AnchorAnchorItem.jsx',
      //    'src/components/Anchor/Anchor.jsx',
      //    'src/components/AlertErrorBoundary/AlertErrorBoundary.jsx',
      //    'src/components/Alert/Alert.jsx',
      //    'src/components/Affix/Affix.jsx',
      //    'src/components/TitleDrawer/TitleDrawer.jsx',
      //    'src/components/Icon/Icon.jsx',
      //    'src/components/Grid/Grid.jsx',
      //    'src/components/Mention/Mention.jsx',
      //    'src/components/LocaleProvider/LocaleProvider.jsx',
      //    'src/components/PageHeader/PageHeader.jsx',
      //    'src/components/Comment/Comment.jsx',
      //    'src/components/Provider/Provider.jsx',

      //   ],
      // },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'ANT-UXPin-Merge',
};
