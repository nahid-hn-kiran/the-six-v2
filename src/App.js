import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import router from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Login />
      <Register />
      <Toaster />
    </Provider>
  )
}

export default App
