import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Wifi, Tv, Phone } from 'lucide-react';

const BillDetails: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-4 transition-all duration-300 hover:shadow-lg">
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="flex items-center justify-between w-full"
      >
        <h3 className="text-lg font-semibold text-gray-800">Resumo da fatura</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      <div className={`mt-4 transition-all duration-300 overflow-hidden ${
        isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border-b border-gray-100">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <Wifi className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Internet</p>
                <p className="text-xs text-gray-500">Claro net virtua 250MB</p>
              </div>
            </div>
            <p className="font-semibold text-gray-800">R$ 117,90</p>
          </div>
          
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full mr-3">
                <Phone className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Itens Eventuais</p>
                <p className="text-xs text-gray-500">Taxas e serviços adicionais</p>
              </div>
            </div>
            <p className="font-semibold text-gray-800">R$ 1,10</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-500">Total</p>
            <p className="font-bold text-lg text-gray-800">R$ 119,00</p>
          </div>
        </div>
      </div>
      
      {!isExpanded && (
        <div className="mt-3 flex justify-between items-center">
          <div className="text-sm text-gray-500">Internet e serviços</div>
          <div className="font-semibold text-gray-800">R$ 119,00</div>
        </div>
      )}
    </div>
  );
};

export default BillDetails;