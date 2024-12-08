import { useEffect, useRef, useState } from "react";

export function Practic1() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current)
  intervalRef.current = setInterval(() => {
    setNow(Date.now());
  }, 10);

  };

  
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let passedSecond = 0;
  if (now != null && startTime != null) {
    passedSecond = (now - startTime) / 1000;
  }

  //   const refValue = useRef()
  //   console.log(refValue)

  // useEffect(()=>{
  //   // refValue.current.focus()
  // },[])

  // const handleClick = () => {
  //   refValue.current.focus()

  // }
  // const [isPlaying, setIsPlaying] = useState(false);

  // const divElement = useRef();

  // useEffect(() => {
  //   console.log("Height of div Element Is :", divElement.current.offsetHeight);
  // }, []);

  // const handleButton = () => {
  //   setIsPlaying((is) => !is);
  //   if (isPlaying) {
  //     refValue.current.pause();
  //   } else {
  //     refValue.current.play();
  //   }
  // };
  // let clickTimes =0
  // const handleClick = () => {
  //   setCount((count) => count + 1);
  //   refValue.current = refValue.current + 1;
  //   alert(`you clicked ${refValue.current} times`);
  //   console.log(refValue.current);
  //   clickTimes++;
  //   console.log(clickTimes)
  // };
  // console.log("state RENDERINg");
  // console.log(clickTimes);

  return (
    <div>
      {/* <input className="search" ref={refValue}  />
      <button onClick={handleClick}>Click Me!</button> */}

      <>
        <div>
          <h2>Time passed : {passedSecond.toFixed(2)}</h2>
        </div>
        <button onClick={handleStart} style={{ color: "#fff" }}>
          Start
        </button>
        <button onClick={handleStop} style={{ color: "#fff" }}>
          Stop
        </button>
        {/* <button onClick={handleButton} style={{ color: "#fff" }}>
          {isPlaying ? "pause" : "play"}
        </button> */}
        {/* <div ref={divElement}> fttyty</div> */}
        {/* <video width="250" ref={refValue}>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video> */}
      </>
    </div>
  );
}

export default Practic1;
