import { forwardRef, useEffect, useRef, useState } from "react";

//forwardRef practice
export function Video() {
  const refValue = useRef();

  return (
    <div>
      <>
        <div>
          <MyVideo
            ref={refValue}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
            width="250"
          />
          <button
            onClick={() => refValue.current.play()}
            style={{ color: "#fff" }}
          >
            Play
          </button>
          <button
            onClick={() => refValue.current.pause()}
            style={{ color: "#fff" }}
          >
            Pause
          </button>
        </div>
      </>
    </div>
  );
}

export default Video;
const MyVideo = forwardRef(({ width, src, type }, ref) => {
 return (
  <video width={width} ref={ref}>
    <source src={src} type={type} />  
  </video>
);

})
 


//3 types of forwardRef definition
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
