import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MyListPage from './pages/MyListPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/redux/store.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/home',
    element: <HomePage/>
  },
  {
    path: '/MyList',
    element: <MyListPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
