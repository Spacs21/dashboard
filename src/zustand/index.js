import { create } from 'zustand'

export const useStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  login: (payload) => set(()=>{
    localStorage.setItem("token", payload)
    return {token: payload}
  }),
  logout: () => set(()=>{
    localStorage.removeItem("token")
    return {token: null}
  }),
}))
