import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home/index.tsx'
import MyOrder from '../MyOrder/index.tsx'
import NotFound from '../NotFound/index.tsx'
import SignIn from '../SignIn/index.tsx'
import MyAccount from '../MyAccount/index.tsx'
import MyOrders from '../MyOrders/index.tsx'
import NavBar from '../../components/NavBar/NavBar.tsx'

const AppRoutes: any = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myOrder', element: <MyOrder /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/myorders', element: <MyOrders /> }
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
