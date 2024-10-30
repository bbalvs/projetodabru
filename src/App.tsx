import { useState } from 'react'
import { Logo } from './components/Logo'
import { ServiceOrderForm } from './components/ServiceOrderForm'
import { ServiceOrder } from './types/ServiceOrder'

function App() {
  const [serviceOrder, setServiceOrder] = useState<ServiceOrder>({
    // Cliente
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    
    // Moto
    bikeModel: '',
    bikeBrand: '',
    bikePlate: '',
    bikeColor: '',
    bikeYear: '',
    bikeKm: '',
    
    // Mecânico
    mechanicName: '',
    
    // Serviços
    items: [{ quantity: 1, description: '', unitPrice: 0, total: 0 }],
    
    // Pagamento
    paymentMethod: 'pix',
    totalAmount: 0,
    
    // Data e Status
    date: '',
    status: 'pending',
    priority: 'medium',
    
    // Logo
    logo: '/logo-placeholder.png'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Ordem de Serviço:', serviceOrder)
    // Aqui você pode adicionar a lógica para gerar o PDF
  }

  const handleChange = (data: Partial<ServiceOrder>) => {
    setServiceOrder(prev => ({ ...prev, ...data }))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-center mb-6">
          <Logo
            src={serviceOrder.logo || '/logo-placeholder.png'}
            alt="Logo da Empresa"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Nova Ordem de Serviço
        </h1>
        
        <ServiceOrderForm
          serviceOrder={serviceOrder}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default App