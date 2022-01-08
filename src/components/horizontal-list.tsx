import React from "react";

export function HorizontalList<T>({
  items,
  ItemComponent,
}: {
  items: T[];
  ItemComponent: (props: T) => JSX.Element;
}) {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...item} />
      ))}
    </>
  );
}
