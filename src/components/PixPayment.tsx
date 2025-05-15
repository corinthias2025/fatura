import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useModalContext } from '../context/ModalContext';

const PixPayment: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { openModal } = useModalContext();
  
  const pixCode = '00020101021126580014br.gov.bcb.pix01362fc8fd02-fa45-4ff3-80a4-1c2f3439231b5204000053039865406119.005802BR5907LIVEPIX6009SAO PAULO622805246826087fc78c3deae60596736304328E';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode)
      .then(() => {
        setCopied(true);
        openModal();
        
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Erro ao copiar:', err);
        alert('Não foi possível copiar. Tente manualmente.');
      });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Pague com PIX</h3>
      </div>
      
      <div className="relative">
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono text-gray-700 break-all select-all">
          {pixCode}
        </div>
        
        <button
          onClick={handleCopyPix}
          className={`mt-4 flex items-center justify-center w-full py-3 px-4 rounded-lg transition-all duration-300 ${
            copied 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-[#DA291C] hover:bg-[#B22016]'
          } text-white font-medium`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              <span>Código copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              <span>Copiar código PIX</span>
            </>
          )}
        </button>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-lg">
        <p className="text-xs text-blue-700">
          <span className="font-semibold">Dica:</span> O PIX é o meio mais rápido e seguro de pagar sua fatura.
        </p>
      </div>
    </div>
  );
};

export default PixPayment;