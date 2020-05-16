export const showModal = (id) => {
  return {
    type: "@modal/SHOW",
    payload: id,
  };
};
