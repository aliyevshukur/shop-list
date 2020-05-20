// ACTIONS
const ADD_LIST = "ADD_LIST";
const ADD_LIST_ITEM = "ADD_LIST_ITEM";
const DELETE_LIST_ITEM = "DELETE_LIST_ITEM";
const UPDATE_LIST_ITEM = "UPDATE_LIST_ITEM";
const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";
const SET_CURRENT_LIST = "SET_CURRENT_LIST";

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
    regular: [
      {
        id: `${Math.random()}${Date.now()}`,
        name: "Anything for  Regular",
        section: "regular",
        items: [],
      },
    ],
  },
  currentSection: "oneTime",
  currentList: { name: "test" },
};

// SELECTORS
export const MODULE_NAME = "lists";
export const getSections = (state) => state[MODULE_NAME].sections;
export const getCurrentSection = (state) => state[MODULE_NAME].currentSection;
export const getCurrentList = (state) => state[MODULE_NAME].currentList;

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
      console.log(payload.section);
      console.log("HI");
      
      return {
        ...state,
        sections: {
          ...state.sections,
          [payload.section]: state.sections[payload.section].map((list) => {
            if (list.id === payload.listId) {
              return {
                ...list,
                items: [
                  ...list.items,
                  {
                    id: `${Math.random()}${Date.now()}`,
                    listId: list.id,
                    completed: false,
                    name: payload.name,
                    count: payload.count,
                    measure: payload.measure,
                  },
                ],
              };
            }
            return list;
          }),
        },
      };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [payload.section]: state.sections[payload.section].map((list) => {
            if (list.id === payload.listId) {
              return {
                ...list,
                items: list.items.filter((item) => item.id !== payload.id),
              };
            }
            return list;
          }),
        },
      };
    case UPDATE_LIST_ITEM:
      return {
        ...state,
        sections: {
          ...state.sections,
          [payload.section]: state.sections[payload.section].map((list) => {
            if (list.id === payload.listId) {
              return {
                ...list,
                item: list.item.map((item) => {
                  if (item.id === payload.id) {
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
            }
          }),
        },
      };
    case SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection: payload.section,
      };
    case SET_CURRENT_LIST:
      return {
        ...state,
        currentList: payload.list,
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

export const deleteListItem = (payload) => ({
  type: DELETE_LIST_ITEM,
  payload: payload,
});

export const updateListItem = (payload) => ({
  type: UPDATE_LIST_ITEM,
  payload: payload,
});

export const setCurrentSection = (payload) => ({
  type: SET_CURRENT_SECTION,
  payload: payload,
});

export const setCurrentList = (payload) => ({
  type: SET_CURRENT_LIST,
  payload: payload,
});
