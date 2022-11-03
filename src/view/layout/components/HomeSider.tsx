import { Layout } from 'antd'
const { Sider } = Layout
import style from '../css/sider.module.css'
import { defaultRouter } from '../../../router/index'
import type { MenuProps } from 'antd'
import Collapse from './Collapse'
import { Menu } from 'antd'
import React, { useState } from 'react'
type MenuItem = Required<MenuProps>['items'][number]
import { useNavigate } from 'react-router-dom'
const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const HomeSider = () => {
  const navigate = useNavigate()
  const rootSubmenuKeys = defaultRouter.map(item => item.path)
  const clickMenuItem: MenuProps['onClick'] = e => {
    navigate(`${openKeys}/${e.key}`)
  }
  const renderSider = router => {
    return router.map(item => {
      if (item.children?.length) {
        return getItem(
          item.label,
          item.path,
          item.icon,
          renderSider(item.children)
        )
      } else {
        return getItem(item.label, item.path, item.icon, null)
      }
    })
  }
  const items: MenuItem[] = renderSider(defaultRouter)
  const [openKeys, setOpenKeys] = useState(['/home'])
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    console.log(keys)
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const [collapsed, setCollapsed] = useState(false)
  const handleChange = (value: boolean) => {
    setCollapsed(value)
  }
  return (
    <Sider
      className={style.sider}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <Menu
        defaultSelectedKeys={['/home/monitor']}
        onClick={clickMenuItem}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: collapsed ? 80 : 200 }}
        items={items}
      ></Menu>
      <Collapse collapsed={collapsed} handleChange={handleChange}></Collapse>
    </Sider>
  )
}
// onCollapse={value => setCollapsed(value)}
export default HomeSider
