import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../zustand'
import axios from 'axios'

const Login = () => {
  const onLogin = useStore(state => state.login)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData)
    axios
      .post('https://dummyjson.com/auth/login', user)
      .then(res => {
        onLogin(res.data.accessToken)
        navigate("/dashboard")
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1535] to-[#0b1027] text-white">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10 pointer-events-none"></div>
      <div className="bg-gradient-to-br from-[#111c44]/80 to-[#0b1027]/80 p-8 rounded-xl border border-[#ffffff1a] w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 bg-[#1a2754] border border-[#ffffff1a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 bg-[#1a2754] border border-[#ffffff1a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-[#0075ff] to-[#00c6ff] text-white font-semibold rounded-md hover:from-[#0060cc] hover:to-[#00a3cc] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 transform hover:scale-105"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

