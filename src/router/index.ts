import { Outlet } from 'react-router-dom'
import Login from '@/view/login/login'
import type { RouterOptions } from './type'
import Home from '@/view/layout/index'
import listPage from '@/view/manage/list/index'
import ClassComponent from '@/view/manage/class-component'
import Father from '@/view/test/father'
const defaultRouter: RouterOptions[] = [
  {
    path: '/home',
    component: Home,
    label: '首页',
    children: [
      {
        path: 'monitor',
        label: '数据概览',
        component: Father
      },
      {
        path: 'dashboard',
        label: '数据分析',
        component: listPage
      }
    ]
  },
  {
    path: '/main',
    component: Home,
    label: '首页',
    children: [
      {
        path: 'aaaa',
        label: '数据概览',
        component: ClassComponent
      },
      {
        path: 'bbb',
        label: '数据分析',
        component: Login
      }
    ]
  }
]

const router: RouterOptions[] = [
  {
    path: '/',
    component: Outlet,
    redirect: '/login'
  },
  {
    path: '/login',
    label: '登陆',
    component: Login
  },
  ...defaultRouter
]
export { router, defaultRouter }
