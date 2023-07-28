import { useState } from "react";
import Counter from "./CounterButtom";

export default function CounterClass() {
  const [Count, setCount] = useState(0);

  function incrementParentCounter(by) {
    setCount(Count + by);
  }

  function decrementParentCounter(by) {
    setCount(Count - by);
  }

  return (
    <>
      <span className="d-inline-block p-2 bg-light border rounded text-center m-3">
        {Count}
      </span>
      <Counter
        by={2}
        incrementParent={incrementParentCounter}
        decrementParent={decrementParentCounter}
      />
      <Counter
        by={4}
        incrementParent={incrementParentCounter}
        decrementParent={decrementParentCounter}
      />
    </>
  );
}
