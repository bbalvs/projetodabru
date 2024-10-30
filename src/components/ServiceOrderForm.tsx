import React from 'react'
import { ServiceOrder, ServiceOrderItem } from '../types/ServiceOrder'

interface ServiceOrderFormProps {
  serviceOrder: ServiceOrder
  onSubmit: (e: React.FormEvent) => void
  onChange: (data: Partial<ServiceOrder>) => void
}

export function ServiceOrderForm({ serviceOrder, onSubmit, onChange }: ServiceOrderFormProps) {
  const handleItemChange = (index: number, field: keyof ServiceOrderItem, value: string | number) => {
    const newItems = [...serviceOrder.items]
    newItems[index] = {
      ...newItems[index],
      [field]: value,
      total: field === 'quantity' || field === 'unitPrice' 
        ? Number(value) * (field === 'quantity' ? newItems[index].unitPrice : newItems[index].quantity)
        : newItems[index].total
    }
    
    const totalAmount = newItems.reduce((sum, item) => sum + item.total, 0)
    onChange({ items: newItems, totalAmount })
  }

  const addItem = () => {
    onChange({
      items: [...serviceOrder.items, { quantity: 1, description: '', unitPrice: 0, total: 0 }]
    })
  }

  const removeItem = (index: number) => {
    const newItems = serviceOrder.items.filter((_, i) => i !== index)
    const totalAmount = newItems.reduce((sum, item) => sum + item.total, 0)
    onChange({ items: newItems, totalAmount })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Dados do Cliente */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Dados do Cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Cliente
            </label>
            <input
              type="text"
              id="clientName"
              value={serviceOrder.clientName}
              onChange={(e) => onChange({ clientName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Celular
            </label>
            <input
              type="tel"
              id="clientPhone"
              value={serviceOrder.clientPhone}
              onChange={(e) => onChange({ clientPhone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="clientAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Endereço
            </label>
            <input
              type="text"
              id="clientAddress"
              value={serviceOrder.clientAddress}
              onChange={(e) => onChange({ clientAddress: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </section>

      {/* Dados da Moto */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Dados da Moto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="bikeBrand" className="block text-sm font-medium text-gray-700 mb-1">
              Marca
            </label>
            <input
              type="text"
              id="bikeBrand"
              value={serviceOrder.bikeBrand}
              onChange={(e) => onChange({ bikeBrand: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bikeModel" className="block text-sm font-medium text-gray-700 mb-1">
              Modelo
            </label>
            <input
              type="text"
              id="bikeModel"
              value={serviceOrder.bikeModel}
              onChange={(e) => onChange({ bikeModel: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bikePlate" className="block text-sm font-medium text-gray-700 mb-1">
              Placa
            </label>
            <input
              type="text"
              id="bikePlate"
              value={serviceOrder.bikePlate}
              onChange={(e) => onChange({ bikePlate: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bikeColor" className="block text-sm font-medium text-gray-700 mb-1">
              Cor
            </label>
            <input
              type="text"
              id="bikeColor"
              value={serviceOrder.bikeColor}
              onChange={(e) => onChange({ bikeColor: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bikeYear" className="block text-sm font-medium text-gray-700 mb-1">
              Ano
            </label>
            <input
              type="text"
              id="bikeYear"
              value={serviceOrder.bikeYear}
              onChange={(e) => onChange({ bikeYear: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="bikeKm" className="block text-sm font-medium text-gray-700 mb-1">
              Quilometragem
            </label>
            <input
              type="text"
              id="bikeKm"
              value={serviceOrder.bikeKm}
              onChange={(e) => onChange({ bikeKm: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </section>

      {/* Mecânico */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Mecânico Responsável</h2>
        <div>
          <label htmlFor="mechanicName" className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Mecânico
          </label>
          <input
            type="text"
            id="mechanicName"
            value={serviceOrder.mechanicName}
            onChange={(e) => onChange({ mechanicName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </section>

      {/* Serviços */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Serviços Realizados</h2>
        <div className="space-y-4">
          {serviceOrder.items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-end">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qtd
                </label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Discriminação
                </label>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preço Unit.
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={(e) => handleItemChange(index, 'unitPrice', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total
                </label>
                <input
                  type="number"
                  value={item.total}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-2">
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="w-full px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="w-full px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Adicionar Item
          </button>
        </div>
      </section>

      {/* Pagamento */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Forma de Pagamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
              Método de Pagamento
            </label>
            <select
              id="paymentMethod"
              value={serviceOrder.paymentMethod}
              onChange={(e) => onChange({ 
                paymentMethod: e.target.value as ServiceOrder['paymentMethod'],
                creditInstallments: e.target.value !== 'credit' ? undefined : serviceOrder.creditInstallments
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="pix">PIX</option>
              <option value="debit">Cartão de Débito</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="cash">Dinheiro</option>
            </select>
          </div>
          {serviceOrder.paymentMethod === 'credit' && (
            <div>
              <label htmlFor="creditInstallments" className="block text-sm font-medium text-gray-700 mb-1">
                Parcelas
              </label>
              <input
                type="number"
                id="creditInstallments"
                min="1"
                max="12"
                value={serviceOrder.creditInstallments}
                onChange={(e) => onChange({ creditInstallments: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Geral
          </label>
          <input
            type="number"
            value={serviceOrder.totalAmount}
            readOnly
            className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md font-bold text-lg"
          />
        </div>
      </section>

      {/* Data e Status */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Data do Serviço
            </label>
            <input
              type="date"
              id="date"
              value={serviceOrder.date}
              onChange={(e) => onChange({ date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              value={serviceOrder.status}
              onChange={(e) => onChange({ status: e.target.value as ServiceOrder['status'] })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pending">Pendente</option>
              <option value="in-progress">Em Andamento</option>
              <option value="completed">Concluído</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
              Prioridade
            </label>
            <select
              id="priority"
              value={serviceOrder.priority}
              onChange={(e) => onChange({ priority: e.target.value as ServiceOrder['priority'] })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>
        </div>
      </section>

      {/* Assinatura */}
      <section className="space-y-4">
        <div className="border-t border-gray-300 pt-8 mt-8">
          <div className="text-center">
            <div className="border-b border-gray-400 w-64 mx-auto mt-16 mb-2"></div>
            <p className="text-sm text-gray-600">Assinatura do Cliente</p>
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Gerar Ordem de Serviço
      </button>
    </form>
  )
}