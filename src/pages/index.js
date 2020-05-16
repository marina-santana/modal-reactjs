//page.js
import React from "react";
import { Container } from "./style.js";
import { useDispatch } from "react-redux";
import { showModal } from "../store/modules/modal/actions.js";
import { FirstModal, SecondModal, ThirdModal } from "./Portal";

function Page() {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(showModal(id));
  };

  return (
    <Container maxWidth="sm">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleClick(1)}
      >
        Modal 1
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => handleClick(2)}
      >
        Modal 2
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handleClick(3)}
      >
        Modal 3
      </button>
      <FirstModal id={1} />
      <SecondModal id={2} />
      <ThirdModal id={3} />
    </Container>
  );
}

export default Page;
