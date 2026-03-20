import React from 'react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-6">
          🚀 Alpha Launch - 50% Off Early Access
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Tax Pro Holy Grail
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Enterprise-grade tax filing with AI assistance. File with confidence, 
          maximize deductions, and stay audit-proof.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#calculator" className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-black font-bold text-lg hover:opacity-90 transition-opacity">
            Try Calculator Free
          </a>
          <a href="#pricing" className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors">
            View Pricing
          </a>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>IRS Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Multi-State Filing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
