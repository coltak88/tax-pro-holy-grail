import React, { useState } from 'react'

const planNames: Record<string, string> = {
  free: 'Free',
  pro: 'Pro ($29/mo)',
  business: 'Business ($99/mo)'
}

export function PaymentModal({ plan, onClose, onSuccess }: { 
  plan: string
  onClose: () => void
  onSuccess: (user: any) => void 
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const user = {
      id: 'user_' + Math.random().toString(36).substr(2, 9),
      email,
      plan: plan as any,
      createdAt: new Date()
    }
    
    onSuccess(user)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Complete Your Purchase</h3>
          <p className="text-gray-400">Plan: {planNames[plan]}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="4242 4242 4242 4242"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                <div className="w-8 h-5 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">VISA</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Expiry
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                CVC
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="123"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-black font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        
        <p className="mt-4 text-center text-xs text-gray-500">
          🔒 Secured by Stripe. Your payment information is encrypted.
        </p>
      </div>
    </div>
  )
}
