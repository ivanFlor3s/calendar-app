import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import { LoginScreen, CalendarScreen } from '../components'

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<CalendarScreen/>}></Route>
        <Route path='/login' element={<LoginScreen/>}></Route>
        <Route path='/*' element={<Navigate to={'/login'}></Navigate>} />
    </Routes>
  </BrowserRouter>)
}
