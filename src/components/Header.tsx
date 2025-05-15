import React from 'react';
import { CreditCard } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#DA291C] px-4 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <CreditCard className="text-white mr-2 h-6 w-6" />
          <span className="text-white font-bold text-xl">MinhaClaro</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-gray-200 text-sm font-medium transition-colors">Início</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 text-sm font-medium transition-colors">Faturas</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 text-sm font-medium transition-colors">Serviços</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 text-sm font-medium transition-colors">Suporte</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;