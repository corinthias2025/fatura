import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const BillSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Fatura residencial</h3>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            Pronta para pagar
          </span>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500">Contrato #748291</p>
          
          <div className="flex items-center mt-2">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <p className="text-sm text-gray-500">Maio 2025</p>
          </div>
        </div>
        
        <div className="mt-4 mb-2">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">R$ 119,00</span>
            <span className="ml-2 text-sm text-gray-500">fique em dia!</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-[#DA291C] h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">7 dias restantes para o vencimento</p>
        </div>
      </div>
    </div>
  );
};

export default BillSummary;