import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import modalList from '../utils/headerList';

function ModalHeader({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex pt-22 justify-center ">
      {/* Modal centralizado */}
      <div className="absolute inset-0" onClick={onClose} />

      <div ref={modalRef} className="w-full">
        <Modal list={modalList} />
      </div>
    </div>
  );
}

// Validação das props
ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired, // obrigatório e deve ser função
};

export default ModalHeader;
