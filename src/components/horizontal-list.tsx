import React from "react";

export function horizontalList<T, P>({
  items,
  resourceName,
  WrappedComponent,
}: {
  items: T[];
  resourceName: string;
  WrappedComponent: React.ComponentType<P>;
}) {
  return (props: P) => (
    <>
      {items.map((item, i) => (
        <WrappedComponent key={i} {...{ [resourceName]: item }} {...props} />
      ))}
    </>
  );
}
