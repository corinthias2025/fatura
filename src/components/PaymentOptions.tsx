import React from 'react';
import { CreditCard, Ban as Bank, Wallet, ChevronsRight } from 'lucide-react';

const PaymentOptions: React.FC = () => {
  const options = [
    { 
      id: 'credit-card', 
      title: 'Cartão de crédito', 
      description: 'Pague com débito ou crédito',
      icon: <CreditCard className="w-5 h-5 text-white" />,
    },
    { 
      id: 'bank-slip', 
      title: 'Boleto bancário', 
      description: 'Vencimento em 10/05',
      icon: <Bank className="w-5 h-5 text-white" />,
    },
    { 
      id: 'digital-wallet', 
      title: 'Carteira digital', 
      description: 'MercadoPago, PicPay e outros',
      icon: <Wallet className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <div className="bg-black bg-opacity-90 rounded-xl p-6 mt-4">
      <h3 className="text-lg font-semibold text-white mb-4">Outras formas de pagamento</h3>
      
      <div className="space-y-2">
        {options.map((option) => (
          <button 
            key={option.id}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-800 bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="p-2 bg-gray-800 rounded-full mr-3">
                {option.icon}
              </div>
              <div className="text-left">
                <p className="font-medium text-white">{option.title}</p>
                <p className="text-xs text-gray-400">{option.description}</p>
              </div>
            </div>
            <ChevronsRight className="w-5 h-5 text-gray-500" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;