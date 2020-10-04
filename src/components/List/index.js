import React from "react";

const isFunc = f => typeof f === "function";

/*
 * List
 */
function List({
  items,
  isSelected,
  Component,
  itemOnClick,
  style,
  id,
  className,
}) {
  return !!items && items.length ? (
    <ul
      id={id}
      className={className ? "list " + className : "list"}
      style={style}
    >
      {items.map((item, i) => (
        <Component
          key={i}
          data={item}
          isSelected={() => isFunc(isSelected) && isSelected(item)}
          onClick={() => isFunc(itemOnClick) && itemOnClick(item)}
        />
      ))}
    </ul>
  ) : null;
}

export default List;
