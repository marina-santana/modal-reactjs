export const INITIAL_STATE = { isShowing: false, idModal: 0 };

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@modal/SHOW":
      return { ...state, isShowing: !state.isShowing, idModal: action.payload };
    default:
      return state;
  }
};

export default modal;
