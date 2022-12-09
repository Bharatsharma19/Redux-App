const initialState = {
  employee: {},
};

export default function RootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "ADD_EMPLOYEE":
      state.employee[actions.payload[0]] = actions.payload[1];
      return { employee: state.employee };

    case "DELETE_EMPLOYEE":
      delete state.employee[actions.payload[0]];
      return { employee: state.employee };

    default:
      return state;
  }
}
