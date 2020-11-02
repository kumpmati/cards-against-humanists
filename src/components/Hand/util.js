export const toggleInList = (item, list, maxLength) => {
  const newList = [...list];
  const indexInList = newList.indexOf(item);

  if (indexInList === -1) {
    // item is not in the list yet, so add it or replace the last item with it
    if (newList.length < maxLength) newList.push(item);
    else newList[newList.length - 1] = item;
  } else {
    // item is in the list, so remove it
    newList.splice(indexInList, 1);
  }
  return newList;
};
