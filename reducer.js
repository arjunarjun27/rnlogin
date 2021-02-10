const initialState = {
  username: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "USERNAME":
      newState.username = action.username;
      newState.password = action.password;

      break;
  }
  return newState;
};

export default reducer;
