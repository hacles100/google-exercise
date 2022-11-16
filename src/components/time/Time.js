import { useEffect, useState } from "react";

function Time() {



// function addZero(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
//   }

//   const d = new Date();
//   let h = addZero(d.getHours());
//   let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let time = h + ":" + m + ":" + s;

const [time, setTime] = useState('')

useEffect(() => {

    const interv = setInterval(() => {

        const time = (new Date()).toLocaleTimeString()
        console.log(time)
        setTime(time)
    }, 1000)

    return ()=> clearInterval(interv)
})

  return (
    <div>
      <p>The time is: {time}</p>
    </div>
  );
}

export default Time;
