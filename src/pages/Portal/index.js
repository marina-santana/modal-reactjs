//portal.js
import React from "react";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modules/modal/actions";

export function FirstModal({ id }) {
  const dispatch = useDispatch();

  return (
    <Modal id={id}>
      <div class="card h-25 mt-5">
        <div class="card-header bg-primary">Modal {id}</div>
        <div class="card-body">
          <p class="card-text">
            Você acabou de clicar na Primeira Modal
            <span role="img" arial-label="icon" aria-labelledby="icon">
              😃
            </span>
          </p>
          <button
            class="btn btn-primary"
            onClick={() => dispatch(showModal(id))}
          >
            Fechar Modal
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function SecondModal({ id }) {
  const dispatch = useDispatch();

  return (
    <Modal id={id}>
      <div class="card h-25 mt-5">
        <div class="card-header bg-warning">
          Modal {id}
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => dispatch(showModal(id))}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">
            Você acabou de clicar na Segunda Modal
            <span role="img" arial-label="icon" aria-labelledby="icon">
              😊
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export function ThirdModal({ id }) {
  const dispatch = useDispatch();

  return (
    <Modal id={id}>
      <div class="card h-25 mt-5">
        <div class="card-header bg-success">
          Modal {id}
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => dispatch(showModal(id))}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body">
          <p class="card-text">
            Você acabou de clicar na Terceira Modal
            <span role="img" arial-label="icon" aria-labelledby="icon">
              😉
            </span>
          </p>
          <button
            class="btn btn-success"
            onClick={() => dispatch(showModal(id))}
          >
            Fechar Modal
          </button>
        </div>
      </div>
    </Modal>
  );
}
