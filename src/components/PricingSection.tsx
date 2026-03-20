import React from 'react'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Basic tax calculation',
    features: [
      'Basic tax calculator',
      'W-2 income only',
      'Standard deduction',
      '1 tax return/year',
      'Community support'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$29',
    period: '/month or $199/year',
    description: 'For individuals with complexity',
    features: [
      'All income types',
      'Crypto tax reporting',
      'Multi-state filing',
      'Business income support',
      'AI tax advisor',
      'Audit risk analysis',
      'Priority support',
      'No ads'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    id: 'business',
    name: 'Business',
    price: '$99',
    period: '/month or $799/year',
    description: 'For small businesses',
    features: [
      'Everything in Pro',
      'Multiple businesses',
      'Payroll integration',
      'Quarterly estimates',
      'Team access (5 users)',
      'API access',
      'White-label reports',
      'Dedicated support'
    ],
    cta: 'Start Business Trial',
    popular: false
  }
]

export function PricingSection({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core tax engine.
          </p>
          <div className="mt-4 inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
            🎉 Alpha Launch Special: 50% off all plans for early adopters
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-8 rounded-3xl ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/50' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 text-black text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-black hover:opacity-90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Need enterprise pricing for your accounting firm?</p>
          <button className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
