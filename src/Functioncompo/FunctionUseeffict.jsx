import React, { useEffect, useMemo, useState } from "react";

const FunctionUseeffict = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  useEffect(() => {
    console.log("useEffect");
  }, []);

  const UseMemo = useMemo(
    function denish() {
      console.log("hello");
      return count * 2;
    },
    [count]
  );

  return (
    <>
      <h1>FunctionUseeffict</h1>
      {UseMemo}
      <p>{count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <p> {item}</p>
      <button onClick={() => setItem("Denish")}>Text</button>
    </>
  );
};

export default FunctionUseeffict;
