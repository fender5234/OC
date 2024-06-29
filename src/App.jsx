import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import './App.css';
import Agents from './pages/Agents';
import SuccesPopup from './components/SuccesPopup/SuccesPopup';

import './fonts/Inter-Regular.woff2';
import './fonts/Inter-Medium.woff2';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/agents' element={<Agents />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgotpass' element={<ForgotPass />}></Route>
        <Route path='/testcomponent' element={<SuccesPopup responseStatus={true}/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

