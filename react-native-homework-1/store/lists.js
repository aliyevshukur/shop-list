// ACTIONS
const ADD_LIST = "ADD_LIST";
const ADD_LIST_ITEM = "ADD_LIST_ITEM";
const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";
const SET_CURRENT_LIST_ID = "SET_CURRENT_LIST_ID";
const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
const EDIT_LIST_ITEM = "EDIT_LIST_ITEM";
const COMPLETE_LIST_ITEM = "COMPLETE_LIST_ITEM";
const RESET_ALL = "RESET_ALL";
const DELETE_LIST = "DELETE_LIST";

const initialState = {
  sections: {
    oneTime: [
      {
        id: `${Math.random()}${Date.now()}`,
        name: "Everything for  breakfast",
        section: "oneTime",
        items: [],
      },
    ],
    regular: [],
  },
  currentSection: "oneTime",
  currentListId: "",
};

// SELECTORS
export const MODULE_NAME = "lists";
export const getSections = (state) => state[MODULE_NAME].sections;
export const getCurrentSection = (state) => state[MODULE_NAME].currentSection;
export const getCurrentListId = (state) => state[MODULE_NAME].currentListId;

// REDUCER
export const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LIST:
      return {
        ...state,
        sections: {
          ...state.sections,
          [payload.section]: [
            ...state.sections[payload.section],
            {
              id: `${Math.random()}${Date.now()}`,
              name: payload.name,
              section: payload.section,
              items: [],
            },
          ],
        },
      };
    case ADD_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].map(
            (list) => {
              if (list.id === state.currentListId) {
                const updatedListItems = [
                  ...list.items,
                  {
                    id: `${Math.random()}${Date.now()}`,
                    listId: list.id,
                    completed: false,
                    name: payload.name,
                    count: payload.count,
                    measure: payload.measure,
                  },
                ];

                return {
                  ...list,
                  items: updatedListItems,
                };
              } else {
                return list;
              }
            }
          ),
        },
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].map(
            (list) => {
              if (list.id === state.currentListId) {
                return {
                  ...list,
                  items: list.items.filter(
                    (item) => item.id !== payload.itemId
                  ),
                };
              }
              return list;
            }
          ),
        },
      };
    case EDIT_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].map(
            (list) => {
              if (list.id === state.currentListId) {
                return {
                  ...list,
                  items: list.items.map((item) => {
                    if (item.id === payload.itemId) {
                      return {
                        ...item,
                        name: payload.name,
                        count: payload.count,
                        measure: payload.measure,
                      };
                    }
                    return item;
                  }),
                };
              } else {
                return list;
              }
            }
          ),
        },
      };
    case SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: payload.section,
      };
    case SET_CURRENT_LIST_ID:
      return {
        ...state,
        currentListId: payload.listId,
      };
    case COMPLETE_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].map(
            (list) => {
              if (list.id === state.currentListId) {
                return {
                  ...list,
                  items: list.items.map((item) => {
                    if (item.id === payload.itemId) {
                      return {
                        ...item,
                        completed: true,
                      };
                    } else {
                      return item;
                    }
                  }),
                };
              } else {
                return list;
              }
            }
          ),
        },
      };
    case RESET_ALL:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].map(
            (list) => {
              if (list.id === state.currentListId) {
                return {
                  ...list,
                  items: list.items.map((item) => {
                    return {
                      ...item,
                      completed: false,
                    };
                  }),
                };
              } else {
                return list;
              }
            }
          ),
        },
      };
    case DELETE_LIST:
      return {
        ...state,
        sections: {
          ...state.sections,
          [state.currentSection]: state.sections[state.currentSection].filter(
            (list) => list.id !== payload.listId
          ),
        },
      };
    default:
      return state;
  }
};

// ACTION CREATORS
export const addList = (payload) => {
  return {
    type: ADD_LIST,
    payload: payload,
  };
};

export const addListItem = (payload) => ({
  type: ADD_LIST_ITEM,
  payload: payload,
});

export const setCurrentSection = (payload) => ({
  type: SET_CURRENT_SECTION,
  payload: payload,
});

export const setCurrentListId = (payload) => ({
  type: SET_CURRENT_LIST_ID,
  payload: payload,
});
export const deleteListItem = (payload) => ({
  type: DELETE_LIST_ITEM,
  payload: payload,
});

export const editListItem = (payload) => ({
  type: EDIT_LIST_ITEM,
  payload: payload,
});

export const completeListItem = (payload) => ({
  type: COMPLETE_LIST_ITEM,
  payload: payload,
});

export const resetAll = () => ({
  type: RESET_ALL,
});

export const deleteList = (payload) => ({
  type: DELETE_LIST,
  payload: payload,
});
