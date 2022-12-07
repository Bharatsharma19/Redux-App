const initialState = {
  employee: {},
};

export default function RootReducer(state = initialState, actions) {
  switch (actions.type) {
    case "ADD_EMPLOYEE":
      state.employee[actions.payload[0]] = actions.payload[1];
      return { state: state.employee };

    default:
      return state;
  }
}
