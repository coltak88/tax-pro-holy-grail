import React from 'react'

const features = [
  {
    icon: '🤖',
    title: 'AI Tax Advisor',
    description: 'Get personalized tax advice powered by advanced AI. Maximize deductions and minimize audit risk.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: '💰',
    title: 'Crypto Tax Reporting',
    description: 'Automatic calculation of crypto gains/losses. Form 8949 generation with FIFO/LIFO support.',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: '🏢',
    title: 'Business Income',
    description: 'Schedule C, K-1, and multi-entity support. Deduction optimization for self-employed.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: '🗺️',
    title: 'Multi-State Filing',
    description: 'Automatic state allocation and apportionment. All 50 states supported.',
    color: 'from-purple-400 to-violet-500'
  },
  {
    icon: '🔒',
    title: 'Audit Protection',
    description: 'Audit risk scoring and defense documentation. Expert support available.',
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: '📊',
    title: 'Tax Planning',
    description: 'Year-round tax optimization. What-if scenarios and projections.',
    color: 'from-indigo-400 to-blue-500'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Tax Success
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional-grade tools for individuals, businesses, and accountants
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
