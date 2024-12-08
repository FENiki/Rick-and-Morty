import { forwardRef, useEffect, useRef, useState } from "react";



//forwardRef practice
export function Practic2() {
  const refValue = useRef();

  const handleFoucs = () => {
    refValue.current.focus();
  };
  return (
    <div>
      <>
        <div>
          <Input ref={refValue} label="Search Field" />
          <button onClick={handleFoucs} style={{ color: "#fff" }}>
            click to focus
          </button>{" "}
        </div>
      </>
    </div>
  );
}

export default Practic2;

const Input = forwardRef(({ label }, ref) => {
  return (
    <label>
      {" "}
      {label}:
      <input ref={ref} />
    </label>
  );
});

//3 types of forwardFer definition
//1 normal function
// const Input = forwardRef(function Input({ props }, ref) {
//   return (
//     <label>
//     {label}
//     <input />
//   </label>
//   )
// });

//2 arrow function
//  const Input = forwardRef((props, ref) => {
//   return(
//     <label>
//     {label}
//     <input />
//   </label>
//   )
//  });
//3 normal anonymous function
// forwardRef(function (props, ref) {
//   <label>
//   {label}
//   <input />
// </label>
// });
