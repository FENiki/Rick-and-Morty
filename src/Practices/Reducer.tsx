import { useReducer, useState } from "react";

const INITVALUE = 10;

function reducerFunction(state, { type, payload }) {
  // if (type === "inc") return state + payload;
  // if (type === "dec") return  state - payload;
  // if (type === "reset") return  INITVALUE;
  switch (type) {
    case "inc": {
      return state + payload;
    }
    case "dec": {
      return state - payload;
    }
    case "reset":
      return INITVALUE;

    default:
      return state;
  }
}
export default function Reducer() {
  const [state, dispatch] = useReducer(reducerFunction, INITVALUE);
  // const [count, setCount] = useState(INITVALUE);

  const handleInc = () => {
    // setCount((count) => count + 1);
    dispatch({ type: "inc", payload: 5 });
  };
  const handleDec = () => {
    // setCount((count) => count - 1);
    dispatch({ type: "dec", payload: 3 });
  };
  const handleReset = () => {
    // setCount((count) => count - 1);
    dispatch({ type: "reset", INITVALUE });
  };
  return (
    <div>
      <input value={state} />
      <button style={{ color: "#fff" }} onClick={()=>  dispatch({ type: "dec", payload: 3 })}>
        -
      </button>
      <button style={{ color: "#fff" }} onClick={handleReset}>
        reset
      </button>
      <button style={{ color: "#fff" }} onClick={handleInc}>
        +
      </button>
    </div>
  );
}
 