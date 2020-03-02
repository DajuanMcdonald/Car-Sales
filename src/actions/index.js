export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const buyItem = item => {
  // dipsatch an action here to add an item
  dispatch({ type: 'BUY_ITEM', item })
};

const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch({ type: 'REMOVE_ITEM', item })
  };
