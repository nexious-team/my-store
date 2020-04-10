export const setProduct = newTable => {
  return {
    type: SET_TABLE,
    payload: {
      table: {
        data: newTable
      }
    }
  };
};
