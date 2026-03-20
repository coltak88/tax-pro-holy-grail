import React from 'react'

export function Header({ user }: { user: any }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#1a1a2e]/80 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-xl font-bold">
              T
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Tax Pro Holy Grail
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#calculator" className="text-gray-300 hover:text-white transition-colors">
              Calculator
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300">{user.email}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">
                  {user.plan}
                </span>
              </div>
            ) : (
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-600 text-black font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
