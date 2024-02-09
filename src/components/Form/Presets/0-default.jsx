import * as React from 'react'
import Form from '../Form'
import Item from '../Item/Item'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Checkbox from '../../Checkbox/Checkbox'
import Password from '../../Input/Password/Password'

export default (
  <Form uxpId="form-1">
    <Item
      uxpId="form-item-1"
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input uxpId="input-1" />
    </Item>
    <Item
      uxpId="form-item-2"
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Password uxpId="input-2" placeholder="Enter password" visibilityToggle={true} />
    </Item>
    <Item uxpId="form-item-3" name="password">
      <Checkbox uxpId="form-checkbox-1">Remember me</Checkbox>
    </Item>
    <Item uxpId="form-item-4">
      <Button type="primary" htmlType="submit" uxpId="form-button-1">
        Submit
      </Button>
    </Item>
  </Form>
)
