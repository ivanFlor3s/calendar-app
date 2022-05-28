import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
  return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<CalendarScreen/>}></Route>
        <Route path='/login' element={<LoginScreen/>}></Route>
        <Route path='/*' element={<Navigate to={'/login'}></Navigate>} />
    </Routes>
  </BrowserRouter>)
}
