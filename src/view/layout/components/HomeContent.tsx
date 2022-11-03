import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
const { Content } = Layout
const HomeContent = () => {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  )
}
export default HomeContent
