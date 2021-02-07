import types from "../../helpers/types";

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_USERS:
      return { ...state, users: [...action.payload] };

    case types.LOAD_CHAT:
      return { ...state, messages: [...action.payload] };

    case types.ACTIVE_USER:
      if (state.userActive && state.userActive.id === action.payload)
        return state;
      return { ...state, userActive: action.payload, messages: [] };

    case types.SET_TYPING:
      if (!state.userActive) return { ...state };
      if (state.userActive && state.userActive.id !== action.payload.emitter)
        return { ...state };
      return {
        ...state,
        userActive: {
          ...state.userActive,
          isTyping: action.payload.isTyping,
        },
      };

    case types.ADD_NEW_MESSAGE:
      if (
        state.userActive &&
        state.userActive.id !== action.payload.emitter &&
        state.userActive.id !== action.payload.receiver
      )
        return state;
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case types.CLEAR_ACTIVE:
      return {
        ...state,
        userActive: null,
        messages: [],
        filter: "",
      };

    case types.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
