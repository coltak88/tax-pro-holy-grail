import React from 'react'

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Taxes?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already filed their taxes with confidence. 
            Start for free, upgrade when you need more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#calculator" className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-black font-bold text-lg hover:opacity-90 transition-opacity">
              Start Free Calculator
            </a>
            <a href="#pricing" className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors">
              View All Plans
            </a>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>✓ No credit card required</span>
            <span>✓ Free tier forever</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  )
}
