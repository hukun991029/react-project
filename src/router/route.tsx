import { Route, Navigate } from 'react-router-dom'
const renderRoute = (router: any) => {
  if (router?.length) {
    return router.map((item: any) => {
      return (
        <Route
          path={item.path}
          element={
            item.redirect ? <Navigate to={item.redirect} /> : <item.component />
          }
          key={item.path}
        >
          {item.children?.length && renderRoute(item.children)}
        </Route>
      )
    })
  }
}
export default renderRoute
