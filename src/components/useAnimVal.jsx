import React, { useState, useEffect } from 'react'

export default function useAnimVal(target=0,dur=1000) {
  const [v,setV]=useState(0);
    useEffect(()=>{
        const t0=performance.now(),neg=target<0,abs=Math.abs(target);
        let raf;
        const tick=now=>{const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3);setV(neg?-(abs*e):abs*e);if(p<1)raf=requestAnimationFrame(tick);};
        raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf);
    },[target,dur]);
    return v;
}
