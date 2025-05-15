import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 pt-6 pb-8 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Plataforma</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Claro</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Claro app</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Produtos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Internet</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">TV</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Telefone</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Sobre</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">A empresa</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Imprensa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Portal de Privacidade</a></li>
              <li><a href="#" className="text-xs text-gray-500 hover:text-[#DA291C] transition-colors">Termos de uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            © 2025 Claro. Todos os direitos reservados - CNPJ: 40.432.544/0001-47 - Rua Henri Dunant, 780 - São Paulo - SP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;