import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-2 text-center text-gray-800">Welcome Back </h2>
        <p className="text-sm text-gray-500 mb-8 text-center">Please enter your credentials to log in.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          {" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          {" "}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold shadow-md"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600">
          Don't have an account? <span className="text-purple-600 hover:underline cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  )
}

export default Login
