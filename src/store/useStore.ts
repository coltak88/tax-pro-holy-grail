import { create } from 'zustand'

interface User {
  id: string
  email: string
  plan: 'free' | 'pro' | 'business' | 'enterprise'
  createdAt: Date
}

interface TaxData {
  w2Income: number
  businessIncome: number
  cryptoGains: number
  deductions: number
  filingStatus: 'single' | 'married' | 'head_of_household'
  state: string
}

interface Store {
  user: User | null
  taxData: TaxData
  setUser: (user: User | null) => void
  setTaxData: (data: Partial<TaxData>) => void
  resetTaxData: () => void
}

const defaultTaxData: TaxData = {
  w2Income: 0,
  businessIncome: 0,
  cryptoGains: 0,
  deductions: 0,
  filingStatus: 'single',
  state: 'CA'
}

export const useStore = create<Store>((set) => ({
  user: null,
  taxData: defaultTaxData,
  setUser: (user) => set({ user }),
  setTaxData: (data) => set((state) => ({ 
    taxData: { ...state.taxData, ...data } 
  })),
  resetTaxData: () => set({ taxData: defaultTaxData })
}))
