import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal active"
      onClick={e => {
        // Cerrar si se hace clic fuera del contenido
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <button className="close-modal" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
}