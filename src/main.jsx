import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Store
import { store } from './app/store'
//Vistas
import { HomePage } from './pages/HomePage'
/*import Nav from './components/nav/Nav'
import Banner from './components/banner/Banner'
import Search from './components/search/Search'
import SelectFilter from './components/select/SelectFilter'
import ContentImages from './components/contentimages/ContentImages'
import Footer from './components/footer/Footer'*/

//imports css
import './styles/index.css'
import './styles/nav.css'
import './styles/banner.css'
import './styles/search.css'
import './styles/select.css'
import './styles/images.css'
import './styles/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)