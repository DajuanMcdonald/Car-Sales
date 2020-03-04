
export const buyItem = item => {
  // dipsatch an action here to add an item
  console.log('buyItem', item)
  return { type: 'BUY_ITEM', payload: item }
};

export const removeFeature = item => {
  console.log('removeFeature', item)
    // dispatch an action here to remove an item
    return { type: 'REMOVE_ITEM', payload: item }
  };
