import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyPage from './MyPage.jsx'
import CustomerCenter from './CustomerCenter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyPage />
    {/* <CustomerCenter/> */}
  </StrictMode>,
)
