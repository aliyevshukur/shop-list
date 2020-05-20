// ACTIONS
const UPDATE_SETTINGS = "UPDATE_SETTINGS";

const initialState = {
  userSettings: {
    username: "Anonymous",
    avatarUrl: "https://image.flaticon.com/icons/png/512/149/149071.png",
  },
};

// SELECTORS
export const MODULE_NAME = "user";
export const getUserSettings = (state) => state[MODULE_NAME].userSettings;

// REDUCER
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          username: payload.username,
          avatarUrl: payload.avatarUrl,
        },
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const updateSettings = (payload) => ({
  type: UPDATE_SETTINGS,
  payload: payload,
});
