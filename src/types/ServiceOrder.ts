export interface ServiceOrderItem {
  quantity: number
  description: string
  unitPrice: number
  total: number
}

export type PaymentMethod = 'pix' | 'debit' | 'credit' | 'cash'

export interface ServiceOrder {
  // Cliente
  clientName: string
  clientAddress: string
  clientPhone: string
  
  // Moto
  bikeModel: string
  bikeBrand: string
  bikePlate: string
  bikeColor: string
  bikeYear: string
  bikeKm: string
  
  // Mecânico
  mechanicName: string
  
  // Serviços
  items: ServiceOrderItem[]
  
  // Pagamento
  paymentMethod: PaymentMethod
  creditInstallments?: number
  totalAmount: number
  
  // Data e Status
  date: string
  status: 'pending' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  
  // Logo
  logo?: string
}