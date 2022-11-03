import { router } from './index'
import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoute from './route'
const RouterView = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoute(router)}</Routes>
    </BrowserRouter>
  )
}

export default RouterView
