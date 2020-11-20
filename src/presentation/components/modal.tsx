import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/modal-context";
import { ModalContainer } from "./modal-styles";

interface ModalContextProps {
    isShowing: any;
    handleModal: any;
}

const Modal = ({children, alias}: any) => {
  const { isShowing } = useContext<ModalContextProps>(ModalContext); 
  let arrayModal;
  
  isShowing.forEach((modal: any) => {      
    if (modal.action === 'open' && alias === modal.alias) {        
        arrayModal = (<ModalContainer>{children}</ModalContainer>
      );
    }
  });  

  return isShowing.length ? ReactDOM.createPortal(arrayModal, document.body) : null;
};

export default Modal;