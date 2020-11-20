import React, { useContext } from 'react';
import { Portal } from '../portal-styles';
import { RiCloseLine } from "react-icons/ri";
import { ModalContext } from '../../../context/modal-context';

const FirstPortal: React.FC = () => {
  const { handleModal } = useContext(ModalContext);

  return (
  <Portal>
      <RiCloseLine onClick={() => handleModal('close', 'first-modal')}/>
      <h1>Primeira Modal</h1>
      <span>😃</span>
  </Portal>);
}

export default FirstPortal;