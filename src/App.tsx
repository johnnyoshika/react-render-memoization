import React from "react";
import "./styles.css";

const Counter = ({ count }: { count: number }) => {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

const Button = ({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
}
