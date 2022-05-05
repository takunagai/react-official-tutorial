import React from 'react'
import { createRoot } from 'react-dom/client' // React18 の書き方
import './index.css'
// import App from './App'
// import App2 from './App2'
// import App3 from './App3'
// import App4 from './App4'
// import App5 from './App5'
// import App6 from './App6'
// import App7 from './App7'
// import App8 from './App8'
// import App9 from './App9'
// import Image from './Image'
import Gallery from './Gallery'


const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/*<App4 />*/}
    {/*<App5 />*/}
    {/*<App6 />*/}
    {/*<App7 />*/}
    {/*<App8 />*/}
    {/*<App9 />*/}
    {/*<Image />*/}
    <Gallery />

  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
