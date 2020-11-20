import React, { useContext } from 'react';
import { Portal } from '../portal-styles';
import { RiCloseLine } from "react-icons/ri";
import { ModalContext } from '../../../context/modal-context';

const SecondPortal: React.FC = () => {
  const { handleModal } = useContext(ModalContext);

  return (
  <Portal>
      <RiCloseLine onClick={() => handleModal('close', 'second-modal')}/>
      <h1>Segunda Modal</h1>
      <span>🙂</span>
  </Portal>);
}

export default SecondPortal;