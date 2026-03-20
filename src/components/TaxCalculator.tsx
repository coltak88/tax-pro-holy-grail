import React, { useState } from 'react'
import { useStore } from '../store/useStore'

export function TaxCalculator() {
  const { taxData, setTaxData } = useStore()
  const [result, setResult] = useState<any>(null)
  const [calculating, setCalculating] = useState(false)

  const calculateTax = () => {
    setCalculating(true)
    
    // Simulate tax calculation
    setTimeout(() => {
      const grossIncome = taxData.w2Income + taxData.businessIncome
      const taxableIncome = grossIncome - taxData.deductions - 13850 // Standard deduction for single
      const cryptoTax = taxData.cryptoGains * 0.15 // Long-term capital gains rate
      
      // 2024 tax brackets for single filers
      let federalTax = 0
      const brackets = [
        { min: 0, max: 11000, rate: 0.10 },
        { min: 11000, max: 44725, rate: 0.12 },
        { min: 44725, max: 95375, rate: 0.22 },
        { min: 95375, max: 182050, rate: 0.24 },
        { min: 182050, max: 231250, rate: 0.32 },
        { min: 231250, max: 578125, rate: 0.35 },
        { min: 578125, max: Infinity, rate: 0.37 }
      ]
      
      let remainingIncome = taxableIncome
      for (const bracket of brackets) {
        if (remainingIncome <= 0) break
        const taxableInBracket = Math.min(remainingIncome, bracket.max - bracket.min)
        federalTax += taxableInBracket * bracket.rate
        remainingIncome -= taxableInBracket
      }
      
      const totalTax = federalTax + cryptoTax
      const effectiveRate = (totalTax / grossIncome) * 100
      const refundOrOwe = taxData.w2Income * 0.15 - totalTax // Assuming 15% withholding
      
      setResult({
        grossIncome: grossIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        taxableIncome: taxableIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        federalTax: federalTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        cryptoTax: cryptoTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        totalTax: totalTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        effectiveRate: effectiveRate.toFixed(1) + '%',
        refundOrOwe: refundOrOwe.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        refundOrOweStatus: refundOrOwe >= 0 ? 'refund' : 'owe'
      })
      
      setCalculating(false)
    }, 1000)
  }

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Tax Calculator
          </h2>
          <p className="text-gray-400 text-lg">
            Get an instant estimate of your tax liability
          </p>
        </div>
        
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                W-2 Income
              </label>
              <input
                type="number"
                value={taxData.w2Income || ''}
                onChange={(e) => setTaxData({ w2Income: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="85000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Business Income (1099/Schedule C)
              </label>
              <input
                type="number"
                value={taxData.businessIncome || ''}
                onChange={(e) => setTaxData({ businessIncome: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="15000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Crypto Gains (Long-term)
              </label>
              <input
                type="number"
                value={taxData.cryptoGains || ''}
                onChange={(e) => setTaxData({ cryptoGains: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="10000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Deductions
              </label>
              <input
                type="number"
                value={taxData.deductions || ''}
                onChange={(e) => setTaxData({ deductions: Number(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                placeholder="12000"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Filing Status
              </label>
              <select
                value={taxData.filingStatus}
                onChange={(e) => setTaxData({ filingStatus: e.target.value as any })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="head_of_household">Head of Household</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                State
              </label>
              <select
                value={taxData.state}
                onChange={(e) => setTaxData({ state: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="WA">Washington</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={calculateTax}
            disabled={calculating}
            className="mt-6 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-600 text-black font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {calculating ? 'Calculating...' : 'Calculate My Taxes'}
          </button>
          
          {result && (
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <h3 className="text-xl font-semibold mb-4">Your Tax Estimate</h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Gross Income</span>
                  <p className="text-lg font-semibold">{result.grossIncome}</p>
                </div>
                <div>
                  <span className="text-gray-400">Taxable Income</span>
                  <p className="text-lg font-semibold">{result.taxableIncome}</p>
                </div>
                <div>
                  <span className="text-gray-400">Federal Tax</span>
                  <p className="text-lg font-semibold">{result.federalTax}</p>
                </div>
                <div>
                  <span className="text-gray-400">Crypto Tax</span>
                  <p className="text-lg font-semibold">{result.cryptoTax}</p>
                </div>
                <div>
                  <span className="text-gray-400">Total Tax</span>
                  <p className="text-xl font-bold text-amber-400">{result.totalTax}</p>
                </div>
                <div>
                  <span className="text-gray-400">Effective Rate</span>
                  <p className="text-xl font-bold">{result.effectiveRate}</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 rounded-xl bg-white/5">
                <span className="text-gray-400">Estimated {result.refundOrOweStatus === 'refund' ? 'Refund' : 'Amount Owed'}</span>
                <p className={`text-2xl font-bold ${result.refundOrOweStatus === 'refund' ? 'text-green-400' : 'text-red-400'}`}>
                  {result.refundOrOwe}
                </p>
              </div>
              
              <p className="mt-4 text-sm text-gray-400 text-center">
                This is an estimate. Upgrade to Pro for detailed analysis and optimization recommendations.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
