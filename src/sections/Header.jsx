import logo from '../images/logo-dark.svg';
import iconHumburger from '../images/icon-hamburger.svg';
import iconClose from '../images/icon-close.svg'; // <-- novo ícone!
import { useState } from 'react';
import ModalHeader from '../components/ModalHeader';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white h-17 p-6 flex justify-between items-center relative z-50 lg:hidden overflow-hidden">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-6 px-2" />
        </div>

        {/* Botão Hamburguer / X */}
        <button onClick={() => setIsOpen(!isOpen)} className="z-50 lg:hidden">
          <img src={isOpen ? iconClose : iconHumburger} alt={isOpen ? 'Fechar' : 'Menu'} />
        </button>
      </header>

      {/* Modal fora do header para não escurecer o topo */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-end">
          {/* Overlay escuro clicável */}
          <div className="absolute inset-0 bg-gray-900/40" onClick={() => setIsOpen(false)} />

          {/* Conteúdo do Modal */}
          <div className="relative z-50">
            <ModalHeader onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
