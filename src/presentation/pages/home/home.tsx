import React, { useContext } from 'react';
import { Container} from './home-styles';
import { ModalContext } from '../../context/modal-context';
import Modal from "../../components/modal";
import FirstPortal from "../portal/first-portal/first-portal";
import SecondPortal from '../portal/second-portal/second-portal';
import ThirdPortal from '../portal/third-portal/third-portal';

const FormDynamic: React.FC = () => {
  
  const { handleModal } = useContext(ModalContext);
  
  return (
    <Container>
       <button
          onClick={() => handleModal('open', 'first-modal')}>
            Abrir primeira modal
        </button>
       <button
          onClick={() => handleModal('open', 'second-modal')}>
            Abrir segunda modal
        </button>
       <button
          onClick={() => handleModal('open', 'third-modal')}>
            Abrir terceira modal
        </button>

        <Modal alias='first-modal'>
          <FirstPortal/>
        </Modal>
        <Modal alias='second-modal'>
          <SecondPortal/>
        </Modal>
        <Modal alias='third-modal'>
          <ThirdPortal/>
        </Modal>
  </Container>
  );
}

export default FormDynamic;