export const toggleInList = (item, list, maxLength) => {
  const newList = [...list];
  const i = newList.indexOf(item);

  // item is not in the list yet
  if (i === -1) {
    // make sure the length doesn't exceed maximum
    if (newList.length < maxLength) newList.push(item);
  } else {
    newList.splice(i, 1);
  }
  return newList;
};
