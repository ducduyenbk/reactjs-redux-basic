import {
  GET_LISTS,
  GET_LISTS_START,
  MOVE_CARD,
  MOVE_LIST,
  TOGGLE_DRAGGING
} from '../actions/lists';

const initialState = {
  isFetching: false,
  lists: [],
  isDragging: false
};


export default function lists(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_START:
      var oReturn = {... state};
      oReturn.isFetching = true;
      return oReturn;
    case GET_LISTS:
      var oReturn = {... state};
      oReturn.isFetching = false;
      oReturn.lists = action.lists;
      return oReturn;

    case MOVE_CARD: {
      const newLists = [...state.lists];
      const { lastX, lastY, nextX, nextY } = action;
      if (lastX === nextX) {
        newLists[lastX].cards.splice(nextY, 0, newLists[lastX].cards.splice(lastY, 1)[0]);
      } else {
        // move element to new place
        newLists[nextX].cards.splice(nextY, 0, newLists[lastX].cards[lastY]);
        // delete element from old place
        newLists[lastX].cards.splice(lastY, 1);
      }

      var oReturn = {... state};
      oReturn.lists = newLists;
      return oReturn;
    }
    case MOVE_LIST: {
      const newLists = [...state.lists];
      const { lastX, nextX } = action;
      const t = newLists.splice(lastX, 1)[0];

      newLists.splice(nextX, 0, t);

      var oReturn = {... state};
      oReturn.lists = newLists;
      return oReturn;
    }
    
    case TOGGLE_DRAGGING: {
      var oReturn = {... state};
      oReturn.isDragging = action.isDragging;
      return oReturn;
    }
    default:
      return state;
  }
}
