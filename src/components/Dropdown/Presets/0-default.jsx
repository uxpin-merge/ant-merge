import * as React from 'react';
import Dropdown from '../Dropdown';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    // icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const items2 = { items: [{ label: '1st menu item', key: '1', },] }


export default (
  // <Dropdown uxpId="dropdown-1" menu={{ items, }}
  //   placement="bottom"
  //   arrow
  //   trigger={['click']}

  // />
  <Dropdown
    menu={{ items: items }}
    uxpId="dropdown-1"
  ></Dropdown>
);