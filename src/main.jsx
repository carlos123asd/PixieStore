import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Store
import { store } from './app/store'
//Vistas
import { HomePage } from './pages/HomePage'
import { MyCollection } from './pages/MyCollection'
//imports css
import './styles/index.css'
import './styles/nav.css'
import './styles/banner.css'
import './styles/search.css'
import './styles/select.css'
import './styles/images.css'
import './styles/footer.css'
import './styles/headerMyCollection.css'
import './styles/tag.css'
import './styles/btndiscovermore.css'
import './styles/btngrouphome.css'
import './styles/btngroumycollection.css'
import './styles/subtitlesection.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomePage />}/>
          <Route path='/myCollection' element={<MyCollection />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)