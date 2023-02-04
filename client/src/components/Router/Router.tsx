import { Navigate, Route, Routes } from 'react-router-dom'
import Welcome from '../../pages/Welcome'
import Error from '../../pages/Error/Error'
import Catalog from '../../pages/Catalog/Catalog'
import News from '../../pages/News/News'
import Contact from '../../pages/Contact/Contact'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/catalog' element={<Catalog />}></Route>
      <Route path='/news' element={<News />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/404' element={<Error />}></Route>
      <Route path='*' element={<Navigate to={'/404'} />}></Route>
    </Routes>
  )
}
