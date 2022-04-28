import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
// import App2 from './App2'
// import App3 from './App3'
// import App4 from './App4'
import App5 from './App5'
// import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/*<App4 />*/}
    <App5 />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
