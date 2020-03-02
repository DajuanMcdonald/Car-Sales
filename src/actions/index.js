export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export const buyItem = item => {
  // dipsatch an action here to add an item
  return { type: 'BUY_ITEM', item }
};

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: 'REMOVE_ITEM', item }
  };
