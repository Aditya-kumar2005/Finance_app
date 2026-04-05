import React from 'react'


export default function useChart(createFn,deps) {
  const ref=React.useRef(null);
    const inst=React.useRef(null);
    React.useEffect(()=>{
        if(inst.current){inst.current.destroy();inst.current=null;}
        if(!ref.current) return;
        inst.current=createFn(ref.current);
        return ()=>{if(inst.current){inst.current.destroy();inst.current=null;}};
    },deps);
    return ref;
}
