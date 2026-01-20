import React, { useState } from "react";



export default function LOginPresenter({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 px-4 py-8">
      {/* Decorative running track lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400"></div>
      
      <div className="w-full max-w-md">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-4 shadow-lg">
            <span className="text-4xl font-bold text-white">⚡</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            RunTrack
          </h1>
          <p className="text-gray-600 mt-2 font-medium">Start Your Journey</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-orange-100 relative overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full"></div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm">Log in to track your progress</p>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="runner@example.com"
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 text-gray-800"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 text-gray-800"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
              />
              <span className="ml-2 text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Forgot password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3.5 rounded-xl transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start Running
          </button>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don't have an account?{' '}
            <button type="button" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Sign up now
            </button>
          </p>
        </div>

        {/* Footer stats */}
        {/* <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-orange-100">
            <div className="text-2xl font-bold text-orange-600">10k+</div>
            <div className="text-xs text-gray-600">Active Runners</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-orange-100">
            <div className="text-2xl font-bold text-orange-600">50M+</div>
            <div className="text-xs text-gray-600">Miles Tracked</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-orange-100">
            <div className="text-2xl font-bold text-orange-600">4.8★</div>
            <div className="text-xs text-gray-600">App Rating</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default function App() {
  return <LoginContainer />;
}