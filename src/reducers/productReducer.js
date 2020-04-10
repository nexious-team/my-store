const productReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return action.payload;
    default:
      return null;
  }
};

export default productReducer;
