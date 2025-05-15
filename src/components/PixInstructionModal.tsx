import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { useModalContext } from '../context/ModalContext';

const PixInstructionModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModalContext();
  
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen, closeModal]);
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
  
  if (!isModalOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={closeModal}
      ></div>
      
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-11/12 max-w-md transition-all duration-300 ease-out">
        <div className="relative p-6">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 animate-pulse">
              <Check className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Código PIX copiado!</h3>
            <p className="text-sm text-gray-600">Siga estas instruções para realizar o pagamento</p>
          </div>
          
          <div className="space-y-4">
            {[
              { step: 1, text: <><strong className="text-blue-700">Abra o aplicativo do seu banco</strong> ou internet banking</> },
              { step: 2, text: <>Acesse a seção <strong className="text-blue-700">PIX</strong> ou <strong className="text-blue-700">Pagamentos</strong></> },
              { step: 3, text: <>Selecione a opção <strong className="text-blue-700">"Pagar com PIX Copia e Cola"</strong></> },
              { step: 4, text: <><strong className="text-blue-700">Cole o código</strong> no campo indicado</> },
              { step: 5, text: <><strong className="text-blue-700">Confira os dados</strong> e confirme o pagamento</> },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#DA291C] text-white flex items-center justify-center mr-3 text-sm font-bold">
                  {item.step}
                </div>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          
          <button
            onClick={closeModal}
            className="mt-8 w-full py-3 px-4 bg-[#DA291C] hover:bg-[#B22016] text-white font-medium rounded-lg transition-colors duration-200"
          >
            Entendido
          </button>
        </div>
      </div>
    </>
  );
};

export default PixInstructionModal;