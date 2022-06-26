import React from "react";

export const App = (): JSX.Element => {
  const test = (n1: number, n2: number): number => {
    return n1 * n2;
  };

  return (
    <div>
      <h1>Welcome to this React template.</h1>
      <p>
        It's purpose is to be a quick start template for react apps without
        having to use CRA
      </p>
      <p>
        It's simpler and easier to customise, plus one hell of a lot quicker to
        launch
      </p>
      <p>Result of test function is: {test(3, 9)}</p>
    </div>
  );
};
