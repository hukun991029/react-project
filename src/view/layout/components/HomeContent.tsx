import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
const { Content } = Layout
const HomeContent = () => {
  return (
    <Content style={{ overflow: 'auto' }}>
      <Outlet></Outlet>
    </Content>
  )
}
export default HomeContent
