//Modal.js
import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Container } from "./style";

const Modal = ({ children, id }) => {
  const { isShowing, idModal } = useSelector((state) => state.modal);

  if (isShowing && id === idModal) {
    const modal = <Container>{children}</Container>;

    return ReactDOM.createPortal(modal, document.body);
  }

  return null;
};

export default Modal;
