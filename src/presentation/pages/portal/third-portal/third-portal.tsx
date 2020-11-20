import React, { useContext } from 'react';
import { Portal } from '../portal-styles';
import { RiCloseLine } from "react-icons/ri";
import { ModalContext } from '../../../context/modal-context';

const ThirdPortal: React.FC = () => {
  const { handleModal } = useContext(ModalContext);

  return (
  <Portal>
      <RiCloseLine onClick={() => handleModal('close', 'third-modal')}/>
      <h1>Terceira Modal</h1>
      <span>😋</span>
  </Portal>);
}

export default ThirdPortal;