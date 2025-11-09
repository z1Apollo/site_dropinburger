import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './Pages/Home'
import { Page404 } from './Pages/Page404'
import { GlobalStyles } from './Utils/GlobalStyles'

function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App