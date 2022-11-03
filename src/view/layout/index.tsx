import { Layout } from 'antd'
import HomeHeader from './components/HomeHeader'
import HomeSider from './components/HomeSider'
import HomeContent from './components/HomeContent'
// import HomeFooter from './components/HomeFooter'
const Home = () => {
  return (
    <Layout>
      <HomeHeader>Header</HomeHeader>
      <Layout>
        <HomeSider>Sider</HomeSider>
        <HomeContent>Content</HomeContent>
      </Layout>
      {/* <HomeFooter>Footer</HomeFooter> */}
    </Layout>
  )
}
export default Home
