import React from 'react'
import { FaHome, FaTable, FaLanguage, FaUser, FaSignInAlt, FaUserPlus, FaWallet, FaUsers, FaShoppingCart } from 'react-icons/fa'
import { Line, Bar } from 'react-chartjs-2'
import pfp from "../../../assets/pfp.png"

const Basic = () => {
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [400, 200, 300, 400, 300, 500, 350, 400, 300, 450, 380, 400],
          fill: true,
          backgroundColor: 'rgba(14, 165, 233, 0.2)',
          borderColor: '#0ea5e9',
          tension: 0.4,
          pointRadius: 0,
        }]
      }
    
      const activeUsersData = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          data: [400, 300, 200, 300, 400, 500, 400],
          backgroundColor: '#0ea5e9',
          borderRadius: 6,
          barThickness: 12,
        }]
      }
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: '#94a3b8' }
          },
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.1)' },
            ticks: { color: '#94a3b8' }
          }
        },
        plugins: { legend: { display: false } }
      }
      const projects = [
        { name: 'Chakra Soft UI Version', members: 4, budget: '$14,000', completion: 60 },
        { name: 'Add Progress Track', members: 2, budget: '$3,000', completion: 10 },
        { name: 'Fix Platform Errors', members: 2, budget: 'Not set', completion: 100 },
        { name: 'Launch our Mobile App', members: 3, budget: '$32,000', completion: 100 },
        { name: 'Add the New Pricing Page', members: 4, budget: '$400', completion: 25 }
      ]
      
  return (
    <div className="ml-64 p-6 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {[
        { icon: FaWallet, label: "Today's Money", value: "$53,000", change: "+55%" },
        { icon: FaUsers, label: "Today's Users", value: "2,300", change: "+5%" },
        { icon: FaUserPlus, label: "New Clients", value: "+3,052", change: "-14%" },
        { icon: FaShoppingCart, label: "Total Sales", value: "$173,000", change: "+8%" },
      ].map((stat, index) => (
        <div key={index} className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-4 border border-[#ffffff1a] hover:shadow-lg hover:shadow-blue-500/10 transition-all">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
            <div className={`${index % 2 === 0 ? 'bg-gradient-to-br from-[#0075ff] to-[#00c6ff]' : 'bg-gradient-to-br from-[#00b574] to-[#00f7a6]'} p-3 rounded-xl`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6 relative overflow-hidden border border-[#ffffff1a]">
          <div className="relative z-10">
            <p className="text-gray-400">Welcome back,</p>
            <h2 className="text-3xl font-bold text-white mb-2">Mark Johnson</h2>
            <p className="text-gray-400">Glad to see you again!</p>
            <p className="text-gray-400">Ask me anything.</p>
            <button className="mt-4 text-sm text-blue-500 flex items-center gap-2">
              Tap to record
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <div className="w-full h-full bg-gradient-to-br from-[#0075ff] to-[#00c6ff] opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6 border border-[#ffffff1a]">
          <h3 className="text-white text-xl mb-2">Satisfaction Rate</h3>
          <p className="text-gray-400 text-sm mb-4">From all projects</p>
          <div className="relative flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="10" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#blue-gradient)" strokeWidth="10" strokeDasharray="283" strokeDashoffset="14" className="drop-shadow-[0_0_8px_rgba(0,117,255,0.5)]" />
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0075ff" />
                    <stop offset="100%" stopColor="#00c6ff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-white">95%</span>
                  <p className="text-xs text-gray-400 mt-1">Based on likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-sm">
            <span className="text-gray-400">0%</span>
            <span className="text-gray-400">100%</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6 border border-[#ffffff1a]">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-white text-xl">Referral Tracking</h3>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm">Invited</p>
              <p className="text-white text-lg font-semibold">145 people</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Bonus</p>
              <p className="text-white text-lg font-semibold">1,465</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-5xl font-bold text-white">9.3</span>
              <span className="text-sm text-gray-400">Total Score</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '93%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
      <div className="lg:col-span-3">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-white text-xl mb-1">Sales overview</h3>
              <p className="text-green-500 text-sm">(+5) more in 2021</p>
            </div>
          </div>
          <div className="h-[300px]">
            <Line data={{
              ...salesData,
              datasets: [{
                ...salesData.datasets[0],
                backgroundColor: 'rgba(0, 117, 255, 0.2)',
                borderColor: 'rgba(0, 117, 255, 1)',
              }]
            }} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6">
          <h3 className="text-white text-xl mb-6">Active Users</h3>
          <div className="h-[200px]">
            <Bar data={{
              ...activeUsersData,
              datasets: [{
                ...activeUsersData.datasets[0],
                backgroundColor: 'rgba(0, 117, 255, 0.8)',
              }]
            }} options={chartOptions} />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div>
              <p className="text-white text-lg font-semibold">32,984</p>
              <p className="text-gray-400 text-sm">Users</p>
            </div>
            <div>
              <p className="text-white text-lg font-semibold">2.42m</p>
              <p className="text-gray-400 text-sm">Clicks</p>
            </div>
            <div>
              <p className="text-white text-lg font-semibold">2,400$</p>
              <p className="text-gray-400 text-sm">Sales</p>
            </div>
            <div>
              <p className="text-white text-lg font-semibold">320</p>
              <p className="text-gray-400 text-sm">Items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6 border border-[#ffffff1a]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white text-xl">Projects</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm">30 done this month</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-800">
                  <th className="text-left pb-4 font-normal">COMPANIES</th>
                  <th className="text-left pb-4 font-normal">MEMBERS</th>
                  <th className="text-left pb-4 font-normal">BUDGET</th>
                  <th className="text-left pb-4 font-normal">COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4">
                      <span className="text-white">{project.name}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex -space-x-2 h-[30px] object-contain rounded">
                        <img src={pfp}/>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-white">{project.budget}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-full rounded-full"
                            style={{ width: `${project.completion}%` }}
                          />
                        </div>
                        <span className="text-white">{project.completion}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-br from-[#111c44] to-[#0b1027] rounded-xl p-6 border border-[#ffffff1a]">
          <h3 className="text-white text-xl mb-4">Orders overview</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b574] to-[#00f7a6] flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-white">$2400, Design changes</p>
                <p className="text-gray-400 text-sm">22 DEC 7:20 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff0000] to-[#ff5757] flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-white">New order #4219423</p>
                <p className="text-gray-400 text-sm">21 DEC 11:21 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0075ff] to-[#00c6ff] flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white">Server Payments for April</p>
                <p className="text-gray-400 text-sm">21 DEC 9:28 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Basic