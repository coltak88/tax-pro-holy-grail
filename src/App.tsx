import React, { useState } from 'react'
import { useStore } from './store/useStore'
import { TaxCalculator } from './components/TaxCalculator'
import { PricingSection } from './components/PricingSection'
import { PaymentModal } from './components/PaymentModal'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function App() {
  const { user, setUser } = useStore()
  const [showPayment, setShowPayment] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan)
    setShowPayment(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
      <Header user={user} />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <TaxCalculator />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <CTASection />
      </main>
      
      <Footer />
      
      {showPayment && selectedPlan && (
        <PaymentModal 
          plan={selectedPlan} 
          onClose={() => setShowPayment(false)}
          onSuccess={(userData) => {
            setUser(userData)
            setShowPayment(false)
          }}
        />
      )}
    </div>
  )
}
