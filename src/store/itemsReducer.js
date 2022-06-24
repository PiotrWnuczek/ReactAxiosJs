import { FETCH } from 'store/itemsActions';

const initial = [{ id: 'item1' }];

const reducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        items: [...action.payload.data],
      };
    default:
      return state;
  }
};

export default reducer;
