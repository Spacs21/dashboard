import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/auth/Auth';
import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../pages/dashboard/profile/Profile';
import Settings from '../pages/dashboard/settings/Settings';
import Tables from '../pages/dashboard/tables/Tables';
import Login from '../pages/login/Login';
import Layout from '../pages/layout/Layout';
import Basic from '../pages/dashboard/basic/Basic';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Login/>} />
      </Route>
      <Route path="/" element={<Auth/>}>
        <Route path="dashboard" element={<Dashboard/>}>
          <Route path='basic' element={<Basic/>}/>
          <Route path="profile" element={<Profile/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="tables" element={<Tables/>} />
        </Route>
      </Route>
      <Route path="login" element={<Login/>} />
      
      <Route path="*" element={<div>404 ERROR</div>} />
    </Routes>
  );
};

export default Router;
