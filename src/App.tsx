import React from "react";
import "./styles.css";

const Counter = ({ count }: { count: number }) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const Button = React.memo(
  ({
    children,
    onClick
  }: {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }) => {
    console.log(`render Button`);
    return (
      <button onClick={onClick}>
        {(() => console.log(`render Button jsx`))()}
        {children}
      </button>
    );
  }
);

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(
    () => setCount((oldCount) => oldCount + 1),
    []
  );
  const decrement = React.useCallback(
    () => setCount((oldCount) => oldCount - 1),
    []
  );

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
}
