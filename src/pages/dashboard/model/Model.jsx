import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'

const Modal = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleConfirm = () => {
    closeModal()
    onLogout()
  }

  return (
    <>
      <NavLink
        className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-gray-400 hover:bg-blue-500/10 hover:text-blue-500"
        onClick={openModal}
      >
        <FaSignInAlt className="w-4 h-4" />
        Logout
      </NavLink>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-[#0f1535] bg-opacity-40 flex items-center justify-center">
          <div className="relative bg-gradient-to-br from-[#111c44]/95 to-[#0b1027]/95 p-8 rounded-xl border border-[#ffffff1a] w-full max-w-md m-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Confirm Logout</h2>
            <p className="mb-6 text-gray-300">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#0f1535] transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-gradient-to-r from-[#0075ff] to-[#00c6ff] text-white font-semibold rounded-md hover:from-[#0060cc] hover:to-[#00a3cc] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0f1535] transition duration-200"
              >
                Confirm
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal

