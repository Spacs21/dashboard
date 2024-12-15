import React, { useEffect } from 'react'
import { FaHome, FaTable, FaLanguage, FaUser, FaSignInAlt, FaUserPlus, FaWallet, FaUsers, FaShoppingCart } from 'react-icons/fa'
import { BiHelpCircle } from 'react-icons/bi'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import axios from 'axios'
import { useStore } from '../../zustand'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const Dashboard = () => {
  const token = useStore(state => state.token)
  const onLogout = useStore(state => state.logout)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
        onLogout()
      });
  }, []);

  // useEffect(()=>{
  //   navigate('basic');
  // }, [])
  

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f1535] to-[#0b1027] text-white">
      <div className="w-64 h-screen bg-gradient-to-b from-[#0b1535] to-[#0b1027] fixed left-0 top-0 p-6 border-r border-[#ffffff1a]">
        <div className="flex items-center gap-2 mb-8">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3182CE"/>
            <path d="M2 17L12 22L22 17" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#3182CE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-lg">VISION UI FREE</span>
        </div>

        <nav className="space-y-6">
          <div className="space-y-1">
            {[
              { icon: FaHome, text: 'Dashboard', path: 'basic'},
              { icon: FaTable, text: 'Tables',  path: 'tables' },
              { icon: FaLanguage, text: 'Settings', path: 'settings' },
              ].map((item, index) => (
                <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 text-sm rounded-lg ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0075ff] to-[#00c6ff] text-white'
                      : 'text-gray-400 hover:bg-[#ffffff1a] hover:text-white'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.text}
              </NavLink>
              ))}
          </div>

          <div>
            <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              ACCOUNT PAGES
            </h3>   
            <div className="space-y-1">
              {[
                { icon: FaUser, text: 'Profile' },
                { icon: FaSignInAlt, text: 'Sign In' },
                { icon: FaUserPlus, text: 'Sign Up' },
              ].map((item, index) => (
                <a key={index} href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-400 hover:bg-blue-500/10 hover:text-blue-500">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 p-4">
            <div className="relative z-10">
              <BiHelpCircle className="w-8 h-8 text-white mb-2" />
              <h4 className="font-medium text-white mb-1">Need help?</h4>
              <p className="text-sm text-white/80">Please check our docs</p>
              <button className="mt-3 w-full bg-white text-blue-600 rounded-lg px-4 py-2 text-sm font-medium">
                DOCUMENTATION
              </button>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <div className="w-32 h-32 bg-white rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard

