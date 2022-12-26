import { Layout } from 'antd'
import HomeHeader from './components/HomeHeader'
import HomeSider from './components/HomeSider'
import HomeContent from './components/HomeContent'
// import HomeFooter from './components/HomeFooter'
const Home = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <HomeHeader>Header</HomeHeader>
      <Layout>
        <HomeSider style={{ height: '100vh - 64px' }}>Sider</HomeSider>
        <HomeContent>Content</HomeContent>
      </Layout>
      {/* <HomeFooter>Footer</HomeFooter> */}
    </Layout>
  )
}
export default Home
