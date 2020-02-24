export const SET_TABLE = "user:setTable";

export const setTable = newTable => {
  return {
    type: SET_TABLE,
    payload: {
      table: {
        data: newTable
      }
    }
  };
};
