import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
const router =createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>}
  ]}
])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
